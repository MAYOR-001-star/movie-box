import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Switch,
    Modal,
    TextInput,
    Pressable,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { icons } from '@/constants/icons';
import { moviesss, userCriticReviews, tvmazePeople } from '@/constants/data';

// Minimalist vector icons built with pure React Native components for cross-platform zero-dependency reliability
const IconCrown = ({ size = 16, color = '#FFD700' }: { size?: number; color?: string }) => (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: size - 2, color }}>👑</Text>
    </View>
);

const IconChevronRight = ({ color = '#6E7A99' }: { color?: string }) => (
    <View style={{ width: 8, height: 8, borderTopWidth: 2, borderRightWidth: 2, borderColor: color, transform: [{ rotate: '45deg' }] }} />
);

const IconCheck = ({ color = '#AB8BFF' }: { color?: string }) => (
    <View style={{ width: 12, height: 6, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: color, transform: [{ rotate: '-45deg' }], marginTop: -2 }} />
);

const IconEdit = ({ color = '#D6C7FF' }: { color?: string }) => (
    <Text style={{ fontSize: 13, color }}>✎</Text>
);

const IconPlay = () => (
    <View style={{ width: 0, height: 0, borderTopWidth: 5, borderTopColor: 'transparent', borderBottomWidth: 5, borderBottomColor: 'transparent', borderLeftWidth: 8, borderLeftColor: '#ffffff', marginLeft: 2 }} />
);

const Profile = () => {
    const insets = useSafeAreaInsets();

    // User State
    const [name, setName] = useState('Alex Morgan');
    const [handle, setHandle] = useState('@alex_cinephile');
    const [bio, setBio] = useState('Sci-Fi buff & weekend film critic. Forever hunting for hidden cinematic masterpieces 🎬');
    const [avatarUrl, setAvatarUrl] = useState(tvmazePeople[0].image.medium);

    // Modal Temporary State
    const [tempName, setTempName] = useState(name);
    const [tempHandle, setTempHandle] = useState(handle);
    const [tempBio, setTempBio] = useState(bio);
    const [tempAvatarUrl, setTempAvatarUrl] = useState(avatarUrl);

    // Activity Tabs
    const [activeTab, setActiveTab] = useState<'history' | 'reviews' | 'downloads'>('history');

    // Setting toggles
    const [wifiOnly, setWifiOnly] = useState(true);
    const [autoplay, setAutoplay] = useState(true);
    const [pushNotifs, setPushNotifs] = useState(true);
    const [recommendations, setRecommendations] = useState(true);
    const [quality, setQuality] = useState('4K Ultra HD');
    const [cacheSize, setCacheSize] = useState('1.2 GB');

    // Modals
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [qualityModalVisible, setQualityModalVisible] = useState(false);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

    const showFeedback = (msg: string) => {
        setFeedbackMessage(msg);
        setTimeout(() => setFeedbackMessage(null), 2500);
    };

    const handleSaveProfile = () => {
        setName(tempName);
        setHandle(tempHandle);
        setBio(tempBio);
        setAvatarUrl(tempAvatarUrl);
        setEditModalVisible(false);
        showFeedback('Profile updated successfully!');
    };

    const handleClearCache = () => {
        setCacheSize('0 MB');
        showFeedback('Cache cleared! 1.2 GB freed.');
    };

    const qualityOptions = [
        { label: 'Auto (Recommended)', desc: 'Adjusts automatically to connection' },
        { label: 'Data Saver (480p)', desc: 'Lowest data usage' },
        { label: 'Standard (720p)', desc: 'Good balance of speed and clarity' },
        { label: 'Full HD (1080p)', desc: 'Crisp high definition' },
        { label: '4K Ultra HD', desc: 'Maximum cinematic quality with HDR' },
    ];

    // Sample watch history with progress
    const watchHistory = [
        { ...moviesss[0], progress: 0.85, timeLeft: '12m left' },
        { ...moviesss[1], progress: 0.42, timeLeft: '35m left' },
        { ...moviesss[2], progress: 0.95, timeLeft: '3m left' },
        { ...moviesss[3], progress: 0.20, timeLeft: '52m left' },
    ];

    // User's movie reviews & ratings from constants/data.ts
    const userReviews = userCriticReviews;

    return (
        <SafeAreaView className="flex-1 bg-[#030014]" edges={['top']}>
            {/* Ambient Background Glow */}
            <View className="absolute top-0 left-0 right-0 h-80 opacity-35 pointer-events-none">
                <LinearGradient
                    colors={['#7928CA', '#2B0E68', 'transparent']}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>

            {/* Header Notification Toast */}
            {feedbackMessage && (
                <View className="absolute top-12 left-6 right-6 z-50 bg-[#221F3D] border border-[#AB8BFF] rounded-2xl p-3.5 shadow-lg flex-row items-center justify-center">
                    <Text className="text-[#D6C7FF] text-sm font-semibold text-center">
                        ✓ {feedbackMessage}
                    </Text>
                </View>
            )}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: insets.bottom + 95, // clearance for floating bottom bar
                }}
            >
                {/* 1. Top Bar */}
                <View className="flex-row items-center justify-between px-6 pt-3 pb-4">
                    <Text className="text-white text-2xl font-bold tracking-tight">Profile</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            setTempName(name);
                            setTempHandle(handle);
                            setTempBio(bio);
                            setTempAvatarUrl(avatarUrl);
                            setEditModalVisible(true);
                        }}
                        className="bg-[#0F0D23] border border-[#221F3D] px-3.5 py-1.5 rounded-full flex-row items-center gap-1.5"
                    >
                        <IconEdit />
                        <Text className="text-[#D6C7FF] text-xs font-semibold">Edit</Text>
                    </TouchableOpacity>
                </View>

                {/* 2. User Hero Section */}
                <View className="px-6 pt-1 pb-5 items-center">
                    {/* Avatar with Gradient Ring */}
                    <View className="relative">
                        <LinearGradient
                            colors={['#D6C7FF', '#AB8BFF', '#7928CA']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ width: 96, height: 96, borderRadius: 48, padding: 3, alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={{ uri: avatarUrl }}
                                style={{ width: '100%', height: '100%', borderRadius: 45, backgroundColor: '#0F0D23' }}
                                resizeMode="cover"
                            />
                        </LinearGradient>

                        {/* VIP Badge */}
                        <View className="absolute -bottom-1 -right-1 bg-[#151312] border-2 border-[#FFD700] rounded-full px-2 py-0.5 flex-row items-center gap-0.5">
                            <IconCrown size={12} />
                            <Text className="text-[#FFD700] text-[10px] font-extrabold tracking-wider">VIP</Text>
                        </View>
                    </View>

                    {/* Name & Username */}
                    <Text className="text-white text-xl font-bold mt-3">{name}</Text>
                    <Text className="text-[#AB8BFF] text-xs font-medium mt-0.5">{handle}</Text>

                    {/* Bio */}
                    <Text className="text-[#A8B5DB] text-xs text-center mt-2 px-4 leading-relaxed">
                        {bio}
                    </Text>

                    {/* Quick Stats Grid */}
                    <View className="flex-row items-center justify-between w-full mt-5 bg-[#0F0D23]/95 border border-[#221F3D] rounded-2xl py-3 px-4">
                        <View className="items-center flex-1">
                            <Text className="text-white text-base font-extrabold">142</Text>
                            <Text className="text-[#6E7A99] text-[11px] font-medium mt-0.5">Watched</Text>
                        </View>
                        <View className="w-[1px] h-7 bg-[#221F3D]" />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => router.push('/saved')}
                            className="items-center flex-1"
                        >
                            <Text className="text-[#AB8BFF] text-base font-extrabold">38</Text>
                            <Text className="text-[#AB8BFF] text-[11px] font-semibold mt-0.5">Watchlist ›</Text>
                        </TouchableOpacity>
                        <View className="w-[1px] h-7 bg-[#221F3D]" />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setActiveTab('reviews')}
                            className="items-center flex-1"
                        >
                            <Text className="text-white text-base font-extrabold">64</Text>
                            <Text className="text-[#6E7A99] text-[11px] font-medium mt-0.5">Reviews</Text>
                        </TouchableOpacity>
                        <View className="w-[1px] h-7 bg-[#221F3D]" />
                        <View className="items-center flex-1">
                            <Text className="text-white text-base font-extrabold">286h</Text>
                            <Text className="text-[#6E7A99] text-[11px] font-medium mt-0.5">Hours</Text>
                        </View>
                    </View>
                </View>

                {/* 3. VIP Membership Subscription Card */}
                <View className="px-6 mb-4">
                    <LinearGradient
                        colors={['#2D1460', '#180E38', '#0F0D23']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="rounded-2xl p-4 border border-[#AB8BFF]/35 relative overflow-hidden"
                        style={{ borderRadius: 16 }}
                    >
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-2.5">
                                <View className="w-9 h-9 rounded-full bg-[#FFD700]/20 items-center justify-center">
                                    <IconCrown size={18} />
                                </View>
                                <View>
                                    <Text className="text-white text-sm font-bold">MovieBox VIP Member</Text>
                                    <Text className="text-[#D6C7FF] text-[11px] font-medium">Ultra HD 4K • Dolby Atmos • Ad-Free</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => showFeedback('VIP Plan is active through Nov 2026')}
                                className="bg-[#AB8BFF] px-3.5 py-1.5 rounded-full"
                            >
                                <Text className="text-[#151312] text-xs font-bold">Manage</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row items-center justify-between mt-3 pt-3 border-t border-white/10">
                            <Text className="text-[#A8B5DB] text-[11px]">Auto-renews: Nov 26, 2026</Text>
                            <Text className="text-[#34D399] text-[11px] font-bold">● Active</Text>
                        </View>
                    </LinearGradient>
                </View>

                {/* 4. Quick Bookmark Navigation Link to Saved Tab */}
                <View className="px-6 mb-6">
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => router.push('/saved')}
                        className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl p-3.5 flex-row items-center justify-between"
                    >
                        <View className="flex-row items-center gap-3">
                            <View className="w-9 h-9 rounded-xl bg-[#AB8BFF]/15 items-center justify-center">
                                <Image source={icons.saved} tintColor="#AB8BFF" style={{ width: 17, height: 17, tintColor: '#AB8BFF' }} />
                            </View>
                            <View>
                                <Text className="text-white text-xs font-bold">Open Bookmarks & Watchlist</Text>
                                <Text className="text-[#6E7A99] text-[11px]">38 saved titles waiting for you</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-1.5 bg-[#221F3D] px-3 py-1.5 rounded-full">
                            <Text className="text-[#D6C7FF] text-xs font-semibold">View Saved</Text>
                            <IconChevronRight color="#D6C7FF" />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* 5. Activity Showcase (Tabs: History | Reviews | Downloads) */}
                <View className="px-6 mb-6">
                    {/* Segmented Control */}
                    <View className="flex-row bg-[#0F0D23] p-1 rounded-xl border border-[#221F3D] mb-4">
                        <TouchableOpacity
                            onPress={() => setActiveTab('history')}
                            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'history' ? 'bg-[#221F3D]' : ''}`}
                        >
                            <Text className={`text-xs font-bold ${activeTab === 'history' ? 'text-white' : 'text-[#6E7A99]'}`}>
                                History
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setActiveTab('reviews')}
                            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'reviews' ? 'bg-[#221F3D]' : ''}`}
                        >
                            <Text className={`text-xs font-bold ${activeTab === 'reviews' ? 'text-white' : 'text-[#6E7A99]'}`}>
                                Reviews
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setActiveTab('downloads')}
                            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'downloads' ? 'bg-[#221F3D]' : ''}`}
                        >
                            <Text className={`text-xs font-bold ${activeTab === 'downloads' ? 'text-white' : 'text-[#6E7A99]'}`}>
                                Downloads
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* History View */}
                    {activeTab === 'history' && (
                        <View>
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-white text-sm font-bold">Continue Watching</Text>
                                <Text className="text-[#AB8BFF] text-xs font-semibold">{watchHistory.length} shows</Text>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
                                {watchHistory.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        activeOpacity={0.8}
                                        onPress={() =>
                                            router.push({
                                                pathname: '/movie/[id]',
                                                params: { id: String(item.id) },
                                            })
                                        }
                                        className="w-[124px]"
                                    >
                                        <View className="relative rounded-lg overflow-hidden border border-[#221F3D] bg-[#0F0D23]">
                                            <Image
                                                source={{ uri: typeof item.image === 'string' ? item.image : (item.image?.medium || item.image?.original) }}
                                                className="w-[124px] h-[160px]"
                                                resizeMode="cover"
                                            />
                                            {/* Play Icon Badge */}
                                            <View className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 items-center justify-center border border-white/20">
                                                <IconPlay />
                                            </View>

                                            {/* Progress Bar Overlay */}
                                            <View className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/70">
                                                <View
                                                    className="h-full bg-[#AB8BFF]"
                                                    style={{ width: `${Math.round(item.progress * 100)}%` }}
                                                />
                                            </View>
                                        </View>
                                        <Text className="text-white text-xs font-semibold mt-1.5" numberOfLines={1}>
                                            {item.name}
                                        </Text>
                                        <Text className="text-[#A8B5DB] text-[10px]">
                                            {item.timeLeft}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}

                    {/* Reviews View */}
                    {activeTab === 'reviews' && (
                        <View>
                            <View className="flex-row justify-between items-center mb-3">
                                <Text className="text-white text-sm font-bold">My Ratings & Critic Notes</Text>
                                <Text className="text-[#AB8BFF] text-xs font-semibold">{userReviews.length} reviews</Text>
                            </View>
                            <View className="gap-3">
                                {userReviews.map((rev) => (
                                    <TouchableOpacity
                                        key={rev.id}
                                        activeOpacity={0.8}
                                        onPress={() =>
                                            router.push({
                                                pathname: '/movie/[id]',
                                                params: { id: String(rev.id) },
                                            })
                                        }
                                        className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl p-3.5 flex-row gap-3"
                                    >
                                        <Image
                                            source={{ uri: rev.image }}
                                            className="w-14 h-20 rounded-lg bg-[#141030]"
                                            resizeMode="cover"
                                        />
                                        <View className="flex-1 justify-between">
                                            <View>
                                                <View className="flex-row items-center justify-between">
                                                    <Text className="text-white text-xs font-bold" numberOfLines={1}>
                                                        {rev.name}
                                                    </Text>
                                                    <Text className="text-[#FFD700] text-xs font-bold">
                                                        ★ {rev.rating}/10
                                                    </Text>
                                                </View>
                                                <Text className="text-[#A8B5DB] text-[11px] mt-1 leading-relaxed" numberOfLines={2}>
                                                    "{rev.review}"
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center justify-between pt-1">
                                                <Text className="text-[#6E7A99] text-[10px]">{rev.date}</Text>
                                                <Text className="text-[#AB8BFF] text-[10px] font-semibold">View Show ›</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    )}

                    {/* Downloads View */}
                    {activeTab === 'downloads' && (
                        <View className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl p-4">
                            <View className="flex-row items-center justify-between">
                                <View>
                                    <Text className="text-white text-sm font-bold">Offline Storage</Text>
                                    <Text className="text-[#A8B5DB] text-[11px] mt-0.5">3 episodes ready to watch</Text>
                                </View>
                                <Text className="text-[#D6C7FF] text-xs font-bold">4.6 GB / 64 GB</Text>
                            </View>
                            {/* Storage bar */}
                            <View className="w-full h-2 bg-[#221F3D] rounded-full mt-3 overflow-hidden flex-row">
                                <View className="h-full bg-[#AB8BFF]" style={{ width: '18%' }} />
                                <View className="h-full bg-[#7928CA]" style={{ width: '12%' }} />
                            </View>
                            <View className="flex-row items-center justify-between mt-2.5">
                                <Text className="text-[#6E7A99] text-[10px]">● MovieBox (4.6 GB)</Text>
                                <Text className="text-[#6E7A99] text-[10px]">● Other (14.2 GB)</Text>
                                <Text className="text-[#6E7A99] text-[10px]">● Free (45.2 GB)</Text>
                            </View>
                        </View>
                    )}
                </View>

                {/* 5. Streaming & Playback Settings */}
                <View className="px-6 mb-6">
                    <Text className="text-[#A8B5DB] text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
                        Streaming & Downloads
                    </Text>
                    <View className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl overflow-hidden divide-y divide-[#221F3D]">
                        {/* Video Streaming Quality */}
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setQualityModalVisible(true)}
                            className="flex-row items-center justify-between p-4"
                        >
                            <View>
                                <Text className="text-white text-sm font-semibold">Video Streaming Quality</Text>
                                <Text className="text-[#AB8BFF] text-xs mt-0.5">{quality}</Text>
                            </View>
                            <IconChevronRight />
                        </TouchableOpacity>

                        {/* Wi-Fi Only Downloads */}
                        <View className="flex-row items-center justify-between p-4">
                            <View className="pr-4 flex-1">
                                <Text className="text-white text-sm font-semibold">Download Over Wi-Fi Only</Text>
                                <Text className="text-[#6E7A99] text-xs mt-0.5">Save mobile cellular data</Text>
                            </View>
                            <Switch
                                value={wifiOnly}
                                onValueChange={setWifiOnly}
                                trackColor={{ false: '#221F3D', true: '#AB8BFF' }}
                                thumbColor={wifiOnly ? '#ffffff' : '#6E7A99'}
                            />
                        </View>

                        {/* Autoplay Next Episode */}
                        <View className="flex-row items-center justify-between p-4">
                            <View className="pr-4 flex-1">
                                <Text className="text-white text-sm font-semibold">Autoplay Next Episode</Text>
                                <Text className="text-[#6E7A99] text-xs mt-0.5">Continuous seamless playback</Text>
                            </View>
                            <Switch
                                value={autoplay}
                                onValueChange={setAutoplay}
                                trackColor={{ false: '#221F3D', true: '#AB8BFF' }}
                                thumbColor={autoplay ? '#ffffff' : '#6E7A99'}
                            />
                        </View>
                    </View>
                </View>

                {/* 6. Notifications & Preferences */}
                <View className="px-6 mb-6">
                    <Text className="text-[#A8B5DB] text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
                        Preferences & Notifications
                    </Text>
                    <View className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl overflow-hidden divide-y divide-[#221F3D]">
                        {/* Push Notifications */}
                        <View className="flex-row items-center justify-between p-4">
                            <View className="pr-4 flex-1">
                                <Text className="text-white text-sm font-semibold">Push Notifications</Text>
                                <Text className="text-[#6E7A99] text-xs mt-0.5">Episodes, premieres and updates</Text>
                            </View>
                            <Switch
                                value={pushNotifs}
                                onValueChange={setPushNotifs}
                                trackColor={{ false: '#221F3D', true: '#AB8BFF' }}
                                thumbColor={pushNotifs ? '#ffffff' : '#6E7A99'}
                            />
                        </View>

                        {/* AI Recommendations */}
                        <View className="flex-row items-center justify-between p-4">
                            <View className="pr-4 flex-1">
                                <Text className="text-white text-sm font-semibold">Personalized Recommendations</Text>
                                <Text className="text-[#6E7A99] text-xs mt-0.5">Suggestions tailored to your taste</Text>
                            </View>
                            <Switch
                                value={recommendations}
                                onValueChange={setRecommendations}
                                trackColor={{ false: '#221F3D', true: '#AB8BFF' }}
                                thumbColor={recommendations ? '#ffffff' : '#6E7A99'}
                            />
                        </View>
                    </View>
                </View>

                {/* 7. App Storage & Maintenance */}
                <View className="px-6 mb-6">
                    <Text className="text-[#A8B5DB] text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
                        Storage & Devices
                    </Text>
                    <View className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl overflow-hidden divide-y divide-[#221F3D]">
                        {/* Active Devices */}
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => showFeedback('3 active devices: iPhone 15 Pro, Apple TV 4K, iPad Air')}
                            className="flex-row items-center justify-between p-4"
                        >
                            <View>
                                <Text className="text-white text-sm font-semibold">Manage Devices</Text>
                                <Text className="text-[#6E7A99] text-xs mt-0.5">3 devices currently active</Text>
                            </View>
                            <IconChevronRight />
                        </TouchableOpacity>

                        {/* Clear Cache */}
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={handleClearCache}
                            className="flex-row items-center justify-between p-4"
                        >
                            <View>
                                <Text className="text-white text-sm font-semibold">Clear App Cache</Text>
                                <Text className="text-[#6E7A99] text-xs mt-0.5">Cached video fragments & artwork</Text>
                            </View>
                            <View className="flex-row items-center gap-2">
                                <Text className="text-[#A8B5DB] text-xs font-semibold">{cacheSize}</Text>
                                <IconChevronRight />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 8. Support & Info */}
                <View className="px-6 mb-6">
                    <Text className="text-[#A8B5DB] text-xs font-bold uppercase tracking-wider mb-2.5 px-1">
                        About & Support
                    </Text>
                    <View className="bg-[#0F0D23] border border-[#221F3D] rounded-2xl overflow-hidden divide-y divide-[#221F3D]">
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => showFeedback('Help Center & FAQs')}
                            className="flex-row items-center justify-between p-4"
                        >
                            <Text className="text-white text-sm font-semibold">Help & FAQ</Text>
                            <IconChevronRight />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => showFeedback('Privacy Policy & Terms')}
                            className="flex-row items-center justify-between p-4"
                        >
                            <Text className="text-white text-sm font-semibold">Privacy Policy & Terms</Text>
                            <IconChevronRight />
                        </TouchableOpacity>

                        <View className="flex-row items-center justify-between p-4">
                            <Text className="text-white text-sm font-semibold">Version</Text>
                            <Text className="text-[#6E7A99] text-xs font-medium">MovieBox 1.0.0 (Build 57)</Text>
                        </View>
                    </View>
                </View>

                {/* 9. Log Out Button */}
                <View className="px-6 mb-8">
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setLogoutModalVisible(true)}
                        className="w-full bg-[#E5484D]/15 border border-[#E5484D]/40 rounded-2xl py-3.5 items-center justify-center"
                    >
                        <Text className="text-[#FF6B6B] text-sm font-bold">Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* MODAL 1: Edit Profile */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => setEditModalVisible(false)}
            >
                <Pressable
                    className="flex-1 bg-black/80 justify-end"
                    onPress={() => setEditModalVisible(false)}
                >
                    <Pressable
                        className="bg-[#0F0D23] border-t border-[#221F3D] rounded-t-3xl p-6"
                        style={{ paddingBottom: insets.bottom + 20 }}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View className="w-12 h-1 bg-[#221F3D] rounded-full self-center mb-4" />
                        <Text className="text-white text-lg font-bold mb-4">Edit Profile</Text>

                        {/* Avatar Preset Selector from TVMaze Cast */}
                        <Text className="text-[#A8B5DB] text-xs font-semibold mb-2">Select Character Avatar (TVMaze Cast)</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingBottom: 6 }} className="mb-4">
                            {tvmazePeople.map((person) => {
                                const isChosen = tempAvatarUrl === person.image.medium;
                                return (
                                    <TouchableOpacity
                                        key={person.id}
                                        activeOpacity={0.8}
                                        onPress={() => setTempAvatarUrl(person.image.medium)}
                                        className="items-center"
                                    >
                                        <View className={`rounded-full p-0.5 ${isChosen ? 'border-2 border-[#AB8BFF]' : 'border border-[#221F3D]'}`}>
                                            <Image
                                                source={{ uri: person.image.medium }}
                                                className="w-12 h-12 rounded-full bg-[#141030]"
                                                style={{ width: 48, height: 48, borderRadius: 24 }}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <Text className={`text-[10px] mt-1 font-medium ${isChosen ? 'text-[#AB8BFF] font-bold' : 'text-[#6E7A99]'}`} numberOfLines={1}>
                                            {person.character || person.name.split(' ')[0]}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>

                        {/* Name Input */}
                        <Text className="text-[#A8B5DB] text-xs font-semibold mb-1.5">Full Name</Text>
                        <TextInput
                            value={tempName}
                            onChangeText={setTempName}
                            className="bg-[#141030] border border-[#221F3D] rounded-xl px-4 py-3 text-white text-sm mb-4"
                            placeholder="Your Name"
                            placeholderTextColor="#6E7A99"
                        />

                        {/* Username Input */}
                        <Text className="text-[#A8B5DB] text-xs font-semibold mb-1.5">Username</Text>
                        <TextInput
                            value={tempHandle}
                            onChangeText={setTempHandle}
                            className="bg-[#141030] border border-[#221F3D] rounded-xl px-4 py-3 text-white text-sm mb-4"
                            placeholder="@username"
                            placeholderTextColor="#6E7A99"
                        />

                        {/* Bio Input */}
                        <Text className="text-[#A8B5DB] text-xs font-semibold mb-1.5">Bio</Text>
                        <TextInput
                            value={tempBio}
                            onChangeText={setTempBio}
                            multiline
                            numberOfLines={3}
                            className="bg-[#141030] border border-[#221F3D] rounded-xl px-4 py-3 text-white text-sm mb-6"
                            placeholder="Tell others what you love watching..."
                            placeholderTextColor="#6E7A99"
                            style={{ minHeight: 70, textAlignVertical: 'top' }}
                        />

                        {/* Buttons */}
                        <View className="flex-row gap-3">
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setEditModalVisible(false)}
                                className="flex-1 bg-[#221F3D] py-3.5 rounded-xl items-center"
                            >
                                <Text className="text-white text-sm font-semibold">Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleSaveProfile}
                                className="flex-1 bg-[#AB8BFF] py-3.5 rounded-xl items-center"
                            >
                                <Text className="text-[#151312] text-sm font-bold">Save Changes</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>

            {/* MODAL 2: Video Quality Selector */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={qualityModalVisible}
                onRequestClose={() => setQualityModalVisible(false)}
            >
                <Pressable
                    className="flex-1 bg-black/80 justify-center px-6"
                    onPress={() => setQualityModalVisible(false)}
                >
                    <Pressable
                        className="bg-[#0F0D23] border border-[#221F3D] rounded-3xl p-6"
                        onPress={(e) => e.stopPropagation()}
                    >
                        <Text className="text-white text-lg font-bold mb-1">Streaming Quality</Text>
                        <Text className="text-[#A8B5DB] text-xs mb-4">Choose preferred resolution for video streams</Text>

                        <View className="divide-y divide-[#221F3D]">
                            {qualityOptions.map((opt) => {
                                const isSelected = quality === opt.label.split(' (')[0] || quality === opt.label;
                                return (
                                    <TouchableOpacity
                                        key={opt.label}
                                        activeOpacity={0.7}
                                        onPress={() => {
                                            setQuality(opt.label.split(' (')[0]);
                                            setQualityModalVisible(false);
                                            showFeedback(`Quality set to ${opt.label.split(' (')[0]}`);
                                        }}
                                        className="py-3 flex-row items-center justify-between"
                                    >
                                        <View className="flex-1 pr-3">
                                            <Text className={`text-sm font-semibold ${isSelected ? 'text-[#AB8BFF]' : 'text-white'}`}>
                                                {opt.label}
                                            </Text>
                                            <Text className="text-[#6E7A99] text-xs mt-0.5">{opt.desc}</Text>
                                        </View>
                                        {isSelected && <IconCheck color="#AB8BFF" />}
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setQualityModalVisible(false)}
                            className="mt-5 bg-[#221F3D] py-3 rounded-xl items-center"
                        >
                            <Text className="text-white text-sm font-semibold">Done</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            </Modal>

            {/* MODAL 3: Log Out Confirmation */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={logoutModalVisible}
                onRequestClose={() => setLogoutModalVisible(false)}
            >
                <Pressable
                    className="flex-1 bg-black/85 justify-center px-6"
                    onPress={() => setLogoutModalVisible(false)}
                >
                    <Pressable
                        className="bg-[#0F0D23] border border-[#221F3D] rounded-3xl p-6 items-center text-center"
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View className="w-12 h-12 rounded-full bg-[#E5484D]/20 items-center justify-center mb-3">
                            <Text className="text-xl">🚪</Text>
                        </View>
                        <Text className="text-white text-lg font-bold">Log out of MovieBox?</Text>
                        <Text className="text-[#A8B5DB] text-xs text-center mt-1.5 mb-6 px-4">
                            You will need to sign back in with your account to access your VIP pass and watchlist.
                        </Text>

                        <View className="flex-row gap-3 w-full">
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => setLogoutModalVisible(false)}
                                className="flex-1 bg-[#221F3D] py-3.5 rounded-xl items-center"
                            >
                                <Text className="text-white text-sm font-semibold">Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setLogoutModalVisible(false);
                                    showFeedback('Logged out successfully');
                                }}
                                className="flex-1 bg-[#E5484D] py-3.5 rounded-xl items-center"
                            >
                                <Text className="text-white text-sm font-bold">Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </SafeAreaView>
    );
};

export default Profile;
