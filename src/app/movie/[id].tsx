import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '@/constants/icons';
import { movieDetails, savedShows, moviesss, movies } from '@/constants/data';
import { LinearGradient } from 'expo-linear-gradient';

const MovieDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();

    // Dynamically find show by ID from TVMaze mock datasets, falling back to movieDetails
    const movie = 
        savedShows.find((s) => String(s.id) === String(id)) ||
        movies.find((s) => String(s.id) === String(id)) ||
        moviesss.find((s) => String(s.id) === String(id)) ||
        movieDetails;

    // Clean HTML tags from TVMaze summary string
    const cleanSummary = movie.summary 
        ? movie.summary.replace(/<[^>]*>/g, '').trim() 
        : 'No overview available.';

    // Extract year from premiered date (e.g., '2013-06-24' -> '2013')
    const releaseYear = movie.premiered ? movie.premiered.split('-')[0] : '';
    const platformName = movie.network?.name || (movie as any).webChannel?.name;

    const posterUri = movie.image?.original || 
        movie.image?.medium || 
        (typeof movie.image === 'string' ? movie.image : null);

    return (
        <SafeAreaView className='bg-[#0A071E] flex-1'>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
                {/* 1. Header Banner Image with Floating Back Button */}
                <View className='relative w-full h-[380px]'>
                    <Image
                        source={posterUri ? { uri: posterUri } : icons.coverpic}
                        className='w-full h-full'
                        resizeMode='cover'
                    />
                    {/* Bottom gradient overlay to blend into background */}
                    <LinearGradient
                        colors={['transparent', 'rgba(10, 7, 30, 0.8)', '#0A071E']}
                        className='absolute bottom-0 left-0 right-0 h-32'
                    />

                    {/* Floating Back Button */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => router.back()}
                        className='absolute top-4 left-5 w-10 h-10 rounded-full bg-[#fff]/40 items-center justify-center border border-white/10'
                    >
                        <Image source={icons.back} className="w-5 h-5" resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                {/* 2. Title & Metadata */}
                <View className='px-5 mt-2'>
                    <Text className='text-[24px] font-bold text-white'>{movie.name}</Text>

                    <Text className='text-[#A8B5DB] text-[14px] mt-1.5 font-medium'>
                        {[releaseYear, `${movie.runtime || movie.averageRuntime}m`, movie.language, movie.type]
                            .filter(Boolean)
                            .join(' · ')}
                    </Text>

                    {/* Genre Tags */}
                    {movie.genres && movie.genres.length > 0 && (
                        <View className='flex-row flex-wrap gap-2 mt-3'>
                            {movie.genres.map((genre) => (
                                <View key={genre} className='bg-[#221F3D] px-3 py-1 rounded-full border border-[#2E2854]'>
                                    <Text className='text-[#D6C7FF] text-[12px] font-medium'>{genre}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Rating & Network Badges */}
                    <View className='flex-row items-center gap-3 mt-4'>
                        {movie.rating?.average && (
                            <View className='rounded-[6px] px-3 py-2 bg-[#221F3D] flex-row items-center gap-1.5 border border-[#2E2854]'>
                                <Image source={icons.rating} className='w-4 h-4' resizeMode='contain' />
                                <Text className='text-white text-[13px] font-semibold'>
                                    {movie.rating.average}/10
                                </Text>
                            </View>
                        )}

                        {platformName && (
                            <View className='rounded-[6px] px-3 py-2 bg-[#221F3D] flex-row items-center gap-1.5 border border-[#2E2854]'>
                                <Text className='text-[#A8B5DB] text-[12px]'>Platform:</Text>
                                <Text className='text-white text-[13px] font-semibold'>{platformName}</Text>
                            </View>
                        )}
                    </View>
                </View>

                {/* 3. Overview */}
                <View className='px-5 mt-7'>
                    <Text className='text-[15px] font-semibold text-[#A8B5DB]'>Overview</Text>
                    <Text className='text-[14px]/[1.7] text-white/90 mt-2'>
                        {cleanSummary}
                    </Text>
                </View>

                {/* 4. Details Grid (Premiered, Status, Schedule, Ended) */}
                <View className='mx-5 my-6 p-4 rounded-xl bg-[#141030] border border-[#221F3D]'>
                    <View className='flex-row justify-between py-2 border-b border-white/5'>
                        <Text className='text-[13px] text-[#A8B5DB]'>Premiered</Text>
                        <Text className='font-semibold text-[13px] text-[#D6C7FF]'>{movie.premiered || 'N/A'}</Text>
                    </View>

                    <View className='flex-row justify-between py-2 border-b border-white/5'>
                        <Text className='text-[13px] text-[#A8B5DB]'>Status</Text>
                        <Text className='font-semibold text-[13px] text-[#D6C7FF]'>{movie.status || 'N/A'}</Text>
                    </View>

                    {movie.schedule?.days?.length > 0 && (
                        <View className='flex-row justify-between py-2 border-b border-white/5'>
                            <Text className='text-[13px] text-[#A8B5DB]'>Schedule</Text>
                            <Text className='font-semibold text-[13px] text-[#D6C7FF]'>
                                {movie.schedule.days.join(', ')} at {movie.schedule.time || 'N/A'}
                            </Text>
                        </View>
                    )}

                    {movie.ended && (
                        <View className='flex-row justify-between py-2'>
                            <Text className='text-[13px] text-[#A8B5DB]'>Ended</Text>
                            <Text className='font-semibold text-[13px] text-[#D6C7FF]'>{movie.ended}</Text>
                        </View>
                    )}
                </View>

                {/* 5. Return Button */}
                <View className='px-5'>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => router.back()}
                        className='w-full'
                    >
                        <LinearGradient
                            colors={['#D6C7FF', '#AB8BFF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className='flex-row items-center justify-center rounded-[8px] h-[44px] px-4'
                        >
                            <Text className='text-[#151312] font-bold text-[14px]'>
                                Go back to Homepage
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MovieDetails;
