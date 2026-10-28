import React, { useState, useMemo } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Pressable,
    Modal,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { icons } from '@/constants/icons';
import { savedShows } from '@/constants/data';
import type { TVMazeShow } from '@/types';

// Clean HTML tags from TVMaze summary string
const stripHtml = (html?: string | null) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').trim();
};

const Saved = () => {
    const insets = useSafeAreaInsets();

    // State
    const [savedList, setSavedList] = useState<TVMazeShow[]>(savedShows as TVMazeShow[]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState<string>('All');
    const [sortBy, setSortBy] = useState<'recent' | 'rating' | 'year'>('recent');
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    // Modals & Feedback
    const [clearModalVisible, setClearModalVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [lastRemoved, setLastRemoved] = useState<TVMazeShow | null>(null);

    const showToast = (msg: string) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    // Remove single show
    const handleRemove = (show: TVMazeShow) => {
        setLastRemoved(show);
        setSavedList((prev) => prev.filter((item) => item.id !== show.id));
        showToast(`Removed "${show.name}"`);
    };

    // Undo removal
    const handleUndo = () => {
        if (lastRemoved) {
            setSavedList((prev) => [lastRemoved, ...prev]);
            setLastRemoved(null);
            setToastMessage(null);
        }
    };

    // Clear all
    const handleClearAll = () => {
        setSavedList([]);
        setClearModalVisible(false);
        showToast('All saved bookmarks cleared');
    };

    // Reset to defaults
    const handleResetSample = () => {
        setSavedList(savedShows as TVMazeShow[]);
        showToast('Restored default saved watchlist');
    };

    // Extract dynamic list of genres
    const genreOptions = useMemo(() => {
        const set = new Set<string>();
        savedShows.forEach((show) => {
            show.genres?.forEach((g) => set.add(g));
        });
        return ['All', ...Array.from(set)];
    }, []);

    // Filter and Sort
    const filteredShows = useMemo(() => {
        return savedList
            .filter((item) => {
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.genres?.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase()));
                const matchesGenre = selectedGenre === 'All' || item.genres?.includes(selectedGenre);
                return matchesSearch && matchesGenre;
            })
            .sort((a, b) => {
                if (sortBy === 'rating') {
                    return (b.rating?.average || 0) - (a.rating?.average || 0);
                }
                if (sortBy === 'year') {
                    const yearA = parseInt(a.premiered?.split('-')[0] || '0', 10);
                    const yearB = parseInt(b.premiered?.split('-')[0] || '0', 10);
                    return yearB - yearA;
                }
                return 0; // Default recent order
            });
    }, [savedList, searchQuery, selectedGenre, sortBy]);

    return (
        <SafeAreaView className="flex-1 bg-[#030014]" edges={['top']}>
            {/* Ambient Background Glow */}
            <View className="absolute top-0 left-0 right-0 h-72 opacity-35 pointer-events-none">
                <LinearGradient
                    colors={['#7928CA', '#2B0E68', 'transparent']}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>

            {/* Notification Toast with Undo */}
            {toastMessage && (
                <View className="absolute top-12 left-6 right-6 z-50 bg-[#141030] border border-[#AB8BFF] rounded-2xl p-3.5 shadow-xl flex-row items-center justify-between">
                    <Text className="text-white text-xs font-semibold flex-1 pr-2">
                        {toastMessage}
                    </Text>
                    {lastRemoved && (
                        <TouchableOpacity onPress={handleUndo} className="bg-[#AB8BFF] px-2.5 py-1 rounded-full">
                            <Text className="text-[#151312] text-[11px] font-bold">Undo</Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: insets.bottom + 95, // clearance for floating bottom bar
                }}
            >
                {/* 1. Header Bar */}
                <View className="px-6 pt-3 pb-3 flex-row items-center justify-between">
                    <View>
                        <Text className="text-white text-2xl font-bold tracking-tight">Saved Watchlist</Text>
                        <Text className="text-[#A8B5DB] text-xs font-medium mt-0.5">
                            {filteredShows.length} {filteredShows.length === 1 ? 'title' : 'titles'} bookmarked
                        </Text>
                    </View>

                    {/* View Controls & Clear Button */}
                    <View className="flex-row items-center gap-2">
                        {/* View Mode Toggle */}
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
                            className="bg-[#0F0D23] border border-[#221F3D] px-2.5 py-1.5 rounded-xl flex-row items-center gap-1"
                        >
                            <Text className="text-[#D6C7FF] text-xs font-semibold">
                                {viewMode === 'list' ? '⊞ Grid' : '☰ List'}
                            </Text>
                        </TouchableOpacity>

                        {/* Clear All Button */}
                        {savedList.length > 0 && (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setClearModalVisible(true)}
                                className="bg-[#E5484D]/15 border border-[#E5484D]/35 px-2.5 py-1.5 rounded-xl"
                            >
                                <Text className="text-[#FF6B6B] text-xs font-semibold">Clear</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* 2. Search Bar */}
                <View className="px-6 mt-1 mb-3">
                    <View className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl px-3.5 py-2.5 flex-row items-center gap-2.5">
                        <Image source={icons.search} tintColor="#AB8BFF" style={{ width: 16, height: 16, tintColor: '#AB8BFF' }} />
                        <TextInput
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholder="Search your saved titles..."
                            placeholderTextColor="#6E7A99"
                            className="text-white text-sm flex-1 p-0"
                        />
                        {searchQuery.length > 0 && (
                            <TouchableOpacity onPress={() => setSearchQuery('')} className="p-1">
                                <Text className="text-[#6E7A99] text-xs font-bold">✕</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                {/* 3. Filter Chips & Sort Controls */}
                <View className="mb-4">
                    {/* Genre Filter Horizontal Scroll */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
                    >
                        {genreOptions.map((genre) => {
                            const isSelected = selectedGenre === genre;
                            return (
                                <TouchableOpacity
                                    key={genre}
                                    activeOpacity={0.7}
                                    onPress={() => setSelectedGenre(genre)}
                                    className={`px-3 py-1.5 rounded-full border ${
                                        isSelected
                                            ? 'bg-[#AB8BFF] border-[#AB8BFF]'
                                            : 'bg-[#0F0D23] border-[#221F3D]'
                                    }`}
                                >
                                    <Text
                                        className={`text-xs font-semibold ${
                                            isSelected ? 'text-[#151312]' : 'text-[#A8B5DB]'
                                        }`}
                                    >
                                        {genre}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    {/* Sort By Pills */}
                    <View className="flex-row items-center justify-between px-6 mt-3">
                        <Text className="text-[#6E7A99] text-[11px] font-semibold uppercase tracking-wider">
                            Sort By:
                        </Text>
                        <View className="flex-row gap-2">
                            <TouchableOpacity
                                onPress={() => setSortBy('recent')}
                                className={`px-2.5 py-1 rounded-lg ${
                                    sortBy === 'recent' ? 'bg-[#221F3D]' : 'bg-transparent'
                                }`}
                            >
                                <Text className={`text-[11px] font-semibold ${sortBy === 'recent' ? 'text-[#D6C7FF]' : 'text-[#6E7A99]'}`}>
                                    Recently Saved
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setSortBy('rating')}
                                className={`px-2.5 py-1 rounded-lg ${
                                    sortBy === 'rating' ? 'bg-[#221F3D]' : 'bg-transparent'
                                }`}
                            >
                                <Text className={`text-[11px] font-semibold ${sortBy === 'rating' ? 'text-[#D6C7FF]' : 'text-[#6E7A99]'}`}>
                                    ⭐ Top Rated
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setSortBy('year')}
                                className={`px-2.5 py-1 rounded-lg ${
                                    sortBy === 'year' ? 'bg-[#221F3D]' : 'bg-transparent'
                                }`}
                            >
                                <Text className={`text-[11px] font-semibold ${sortBy === 'year' ? 'text-[#D6C7FF]' : 'text-[#6E7A99]'}`}>
                                    Year
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* 4. Content Area: List View or Grid View */}
                {filteredShows.length === 0 ? (
                    // Empty State
                    <View className="px-6 py-16 items-center">
                        <View className="w-16 h-16 rounded-full bg-[#141030] border border-[#221F3D] items-center justify-center mb-4">
                            <Image source={icons.saved} tintColor="#AB8BFF" style={{ width: 28, height: 28, tintColor: '#AB8BFF' }} />
                        </View>
                        <Text className="text-white text-base font-bold text-center">
                            {searchQuery || selectedGenre !== 'All' ? 'No matching saved titles' : 'Your watchlist is empty'}
                        </Text>
                        <Text className="text-[#A8B5DB] text-xs text-center mt-1.5 px-8 leading-relaxed">
                            {searchQuery || selectedGenre !== 'All'
                                ? 'Try adjusting your search terms or genre filter to find what you are looking for.'
                                : 'Explore trending movies and TV series to bookmark titles you want to watch later.'}
                        </Text>

                        {/* Action button */}
                        {savedList.length === 0 ? (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleResetSample}
                                className="mt-6 bg-[#AB8BFF] px-5 py-2.5 rounded-full"
                            >
                                <Text className="text-[#151312] text-xs font-bold">Restore Demo Bookmarks</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setSearchQuery('');
                                    setSelectedGenre('All');
                                }}
                                className="mt-6 bg-[#221F3D] px-5 py-2.5 rounded-full"
                            >
                                <Text className="text-[#D6C7FF] text-xs font-bold">Reset Filters</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ) : viewMode === 'list' ? (
                    // LIST VIEW
                    <View className="px-6 gap-3">
                        {filteredShows.map((item) => {
                            const releaseYear = item.premiered ? item.premiered.split('-')[0] : '';
                            const platform = item.network?.name || item.webChannel?.name || 'Streaming';
                            const cleanOverview = stripHtml(item.summary);

                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.85}
                                    onPress={() =>
                                        router.push({
                                            pathname: '/movie/[id]',
                                            params: { id: String(item.id) },
                                        })
                                    }
                                    className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl p-3 flex-row gap-3.5 relative overflow-hidden"
                                >
                                    {/* Poster Thumbnail */}
                                    <View className="relative rounded-xl overflow-hidden bg-[#141030] w-[95px] h-[135px]">
                                        <Image
                                            source={{ uri: item.image?.medium || item.image?.original }}
                                            className="w-full h-full"
                                            resizeMode="cover"
                                        />
                                        {/* Status Badge */}
                                        <View className="absolute bottom-1.5 left-1.5 bg-black/75 px-1.5 py-0.5 rounded-md">
                                            <Text className="text-[#D6C7FF] text-[9px] font-bold">
                                                {item.status}
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Info Column */}
                                    <View className="flex-1 justify-between py-0.5">
                                        <View>
                                            {/* Platform & Year */}
                                            <View className="flex-row items-center justify-between">
                                                <Text className="text-[#AB8BFF] text-[11px] font-semibold">
                                                    {platform} • {releaseYear}
                                                </Text>
                                                {/* Remove Button */}
                                                <TouchableOpacity
                                                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                                                    onPress={(e) => {
                                                        e.stopPropagation();
                                                        handleRemove(item);
                                                    }}
                                                    className="w-6 h-6 rounded-full bg-[#221F3D] items-center justify-center"
                                                >
                                                    <Text className="text-[#A8B5DB] text-[11px] font-bold">✕</Text>
                                                </TouchableOpacity>
                                            </View>

                                            {/* Show Name */}
                                            <Text className="text-white text-sm font-bold mt-1" numberOfLines={1}>
                                                {item.name}
                                            </Text>

                                            {/* Rating & Runtime */}
                                            <View className="flex-row items-center gap-2 mt-1">
                                                <View className="flex-row items-center gap-1 bg-[#141030] px-1.5 py-0.5 rounded border border-[#221F3D]">
                                                    <Image source={icons.rating} className="w-3 h-3" resizeMode="contain" />
                                                    <Text className="text-white text-[11px] font-bold">
                                                        {item.rating?.average ? item.rating.average.toFixed(1) : 'N/A'}
                                                    </Text>
                                                </View>
                                                {item.runtime && (
                                                    <Text className="text-[#6E7A99] text-[11px] font-medium">
                                                        {item.runtime}m / ep
                                                    </Text>
                                                )}
                                                {item.savedAt && (
                                                    <Text className="text-[#6E7A99] text-[10px] ml-auto">
                                                        {item.savedAt}
                                                    </Text>
                                                )}
                                            </View>

                                            {/* Summary snippet */}
                                            <Text className="text-[#A8B5DB] text-[11px] mt-1.5 leading-tight" numberOfLines={2}>
                                                {cleanOverview}
                                            </Text>
                                        </View>

                                        {/* Genres & Watch Button */}
                                        <View className="flex-row items-center justify-between mt-2 pt-2 border-t border-white/5">
                                            <View className="flex-row gap-1">
                                                {item.genres?.slice(0, 2).map((genre) => (
                                                    <View key={genre} className="bg-[#141030] px-2 py-0.5 rounded-full border border-[#221F3D]">
                                                        <Text className="text-[#D6C7FF] text-[9.5px] font-medium">{genre}</Text>
                                                    </View>
                                                ))}
                                            </View>

                                            <View className="flex-row items-center gap-1">
                                                <Text className="text-[#AB8BFF] text-xs font-bold">Watch</Text>
                                                <Text className="text-[#AB8BFF] text-xs font-bold">›</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ) : (
                    // GRID VIEW (2 Columns)
                    <View className="px-6 flex-row flex-wrap justify-between gap-y-4">
                        {filteredShows.map((item) => {
                            const releaseYear = item.premiered ? item.premiered.split('-')[0] : '';
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.85}
                                    onPress={() =>
                                        router.push({
                                            pathname: '/movie/[id]',
                                            params: { id: String(item.id) },
                                        })
                                    }
                                    className="w-[48%] bg-[#0F0D23] border border-[#221F3D] rounded-2xl overflow-hidden"
                                >
                                    {/* Poster */}
                                    <View className="relative w-full h-[210px] bg-[#141030]">
                                        <Image
                                            source={{ uri: item.image?.medium || item.image?.original }}
                                            className="w-full h-full"
                                            resizeMode="cover"
                                        />

                                        {/* Floating Rating Badge */}
                                        <View className="absolute top-2 left-2 bg-black/75 px-2 py-0.5 rounded-full flex-row items-center gap-1 border border-white/10">
                                            <Image source={icons.rating} className="w-2.5 h-2.5" resizeMode="contain" />
                                            <Text className="text-white text-[10px] font-bold">
                                                {item.rating?.average ? item.rating.average.toFixed(1) : 'N/A'}
                                            </Text>
                                        </View>

                                        {/* Floating Remove Button */}
                                        <TouchableOpacity
                                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                                            onPress={(e) => {
                                                e.stopPropagation();
                                                handleRemove(item);
                                            }}
                                            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/75 items-center justify-center border border-white/10"
                                        >
                                            <Text className="text-[#FF6B6B] text-xs font-bold">✕</Text>
                                        </TouchableOpacity>

                                        {/* Bottom Gradient overlay */}
                                        <LinearGradient
                                            colors={['transparent', 'rgba(15, 13, 35, 0.9)', '#0F0D23']}
                                            className="absolute bottom-0 left-0 right-0 h-14"
                                        />
                                    </View>

                                    {/* Info Block */}
                                    <View className="p-2.5">
                                        <Text className="text-white text-xs font-bold" numberOfLines={1}>
                                            {item.name}
                                        </Text>
                                        <Text className="text-[#6E7A99] text-[10px] mt-0.5">
                                            {item.genres?.[0] || 'Show'} • {releaseYear}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                )}
            </ScrollView>

            {/* Clear All Confirmation Modal */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={clearModalVisible}
                onRequestClose={() => setClearModalVisible(false)}
            >
                <Pressable
                    className="flex-1 bg-black/85 justify-center px-6"
                    onPress={() => setClearModalVisible(false)}
                >
                    <Pressable
                        className="bg-[#0F0D23] border border-[#221F3D] rounded-3xl p-6 items-center text-center"
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View className="w-12 h-12 rounded-full bg-[#E5484D]/20 items-center justify-center mb-3">
                            <Text className="text-xl">🗑️</Text>
                        </View>
                        <Text className="text-white text-lg font-bold">Clear All Bookmarks?</Text>
                        <Text className="text-[#A8B5DB] text-xs text-center mt-1.5 mb-6 px-4">
                            This will remove all {savedList.length} saved titles from your watchlist.
                        </Text>

                        <View className="flex-row gap-3 w-full">
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setClearModalVisible(false)}
                                className="flex-1 bg-[#221F3D] py-3.5 rounded-xl items-center"
                            >
                                <Text className="text-white text-sm font-semibold">Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleClearAll}
                                className="flex-1 bg-[#E5484D] py-3.5 rounded-xl items-center"
                            >
                                <Text className="text-white text-sm font-bold">Clear All</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </SafeAreaView>
    );
};

export default Saved;
