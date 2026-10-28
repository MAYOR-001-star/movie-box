
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDebounce } from 'use-debounce'
import Header from '@/src/components/Header'
import MovieCard from '@/src/components/MovieCard'
import { movies, moviesss } from '@/constants/data'
import { icons } from '@/constants/icons'
import { TVMazeSearchResult, TVMazeShow } from '@/types'

const Index = () => {
    // Search states
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery] = useDebounce(searchQuery, 400);
    const [searchResults, setSearchResults] = useState<TVMazeShow[]>([]);
    const [isSearchingLoading, setIsSearchingLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Browse states (matching index.tsx endpoints)
    const [browseMovies, setBrowseMovies] = useState<TVMazeShow[]>([]);
    const [isBrowseLoading, setIsBrowseLoading] = useState(true);

    // Fetch popular and latest movies from the TVMaze API (same as index.tsx)
    useEffect(() => {
        const fetchBrowseMovies = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/shows");
                if (!response.ok) {
                    throw new Error("Failed to fetch browse movies");
                }
                const data: TVMazeShow[] = await response.json();
                setBrowseMovies(data);
            } catch {
                // Fallback to local datasets if offline
                setBrowseMovies([]);
            } finally {
                setIsBrowseLoading(false);
            }
        };

        fetchBrowseMovies();
    }, []);

    // Search query effect with debounce
    useEffect(() => {
        const query = debouncedSearchQuery.trim();
        if (!query) {
            setSearchResults([]);
            setIsSearchingLoading(false);
            return;
        }

        const fetchResults = async () => {
            try {
                setIsSearchingLoading(true);
                const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error("Failed to search movies");
                }
                const data: TVMazeSearchResult[] = await response.json();
                // TVMaze wraps each result in { score, show: TVMazeShow }
                const shows = data.map((item) => item.show);
                setSearchResults(shows);
            } catch {
                setSearchResults([]);
            } finally {
                setIsSearchingLoading(false);
            }
        };

        fetchResults();
    }, [debouncedSearchQuery]);

    // Active when user is focused on the search input OR has typed a search query
    const isSearchActive = isFocused || searchQuery.trim().length > 0;

    // Slices for browse view: top 5 popular, top 12 latest (from API or fallback mock)
    const popularMovies = browseMovies.length > 0 ? browseMovies.slice(0, 5) : (moviesss as unknown as TVMazeShow[]);
    const latestMovies = browseMovies.length > 0 ? browseMovies.slice(12, 24) : (movies as unknown as TVMazeShow[]);

    // Header when actively in Search Mode
    const searchHeaderElement = (
        <View className="px-[18px] mb-[18px] flex-row items-center justify-between">
            <Text className="text-white text-[18px] font-bold">
                {searchQuery.trim().length === 0
                    ? 'Search Movies'
                    : isSearchingLoading
                    ? `Searching for "${searchQuery}"...`
                    : searchResults.length > 0
                    ? `Search Results (${searchResults.length})`
                    : `No Results`}
            </Text>
            {/* Cancel button to exit search and return to Popular/Latest */}
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    setSearchQuery('');
                    setIsFocused(false);
                }}
                className="py-1 px-3 bg-[#141030] rounded-full border border-[#2E2854]"
            >
                <Text className="text-[#D6C7FF] text-[12px] font-semibold">Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    // Header when in Default Browse Mode (not focused): Popular movies horizontal carousel + Latest movies header
    const browseHeaderElement = (
        <View className="mx-[18px] mb-[20px]">
            <Text className="mb-[14px] text-white text-[18px] font-bold">
                Popular movies
            </Text>

            <FlatList
                data={popularMovies}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerStyle={{
                    gap: 20,
                }}
                renderItem={({ item, index }) => (
                    <MovieCard item={item} isPopular rank={index + 1} />
                )}
            />

            <Text className="mt-[24px] mb-[14px] text-white text-[18px] font-bold">
                Latest movies
            </Text>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-[#030014]">
            {/* Persistent Header: Mounted ONCE so TextInput never unmounts and keyboard stays up */}
            <Header
                search={true}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onFocus={() => setIsFocused(true)}
                onClear={() => {
                    setSearchQuery('');
                    setIsFocused(false);
                }}
            />

            {isSearchActive ? (
                // 1. SEARCH VIEW (active on focus or when query is typed)
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                    ListHeaderComponent={searchHeaderElement}
                    ListEmptyComponent={
                        searchQuery.trim().length === 0 ? (
                            <View className="items-center justify-center py-20 px-6">
                                <View className="w-16 h-16 rounded-full bg-[#141030] border border-[#2E2854] items-center justify-center mb-4">
                                    <Image source={icons.search} tintColor="#AB8BFF" className="w-7 h-7" resizeMode="contain" />
                                </View>
                                <Text className="text-white text-[18px] font-bold text-center">
                                    Search for Movies
                                </Text>
                                <Text className="text-[#A8B5DB] text-[14px] text-center mt-2 px-6">
                                    Type a title above to discover movies, shows, and series
                                </Text>
                            </View>
                        ) : isSearchingLoading ? (
                            <View className="items-center justify-center py-20">
                                <ActivityIndicator size="large" color="#AB8BFF" />
                                <Text className="text-[#A8B5DB] text-[14px] mt-3">Searching movies...</Text>
                            </View>
                        ) : (
                            <View className="items-center justify-center py-20 px-6">
                                <View className="w-16 h-16 rounded-full bg-[#141030] border border-[#2E2854] items-center justify-center mb-4">
                                    <Image source={icons.search} tintColor="#A8B5DB" className="w-7 h-7" resizeMode="contain" />
                                </View>
                                <Text className="text-white text-[18px] font-bold text-center">
                                    The movie does not exist
                                </Text>
                                <Text className="text-[#A8B5DB] text-[14px] text-center mt-2 px-4 leading-relaxed">
                                    We couldn't find any movie matching "{debouncedSearchQuery || searchQuery}". Please check the spelling or try searching for another title.
                                </Text>
                            </View>
                        )
                    }
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        paddingBottom: 50,
                    }}
                    columnWrapperStyle={
                        searchResults.length > 0
                            ? {
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  gap: 10,
                                  marginBottom: 30,
                              }
                            : undefined
                    }
                    renderItem={({ item }) => (
                        <MovieCard item={item} />
                    )}
                />
            ) : (
                // 2. BROWSE VIEW (unfocused default: Popular movies + Latest movies from API)
                <FlatList
                    data={latestMovies}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                    ListHeaderComponent={browseHeaderElement}
                    contentContainerStyle={{
                        paddingHorizontal: 10,
                        paddingBottom: 50,
                    }}
                    columnWrapperStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        marginBottom: 30,
                    }}
                    renderItem={({ item }) => (
                        <MovieCard item={item} />
                    )}
                />
            )}
        </SafeAreaView>
    );
};

export default Index;
