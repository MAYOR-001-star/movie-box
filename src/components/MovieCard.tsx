import { router } from 'expo-router';
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

interface Props {
    item: {
        id: number | string;
        image?: string | { medium?: string; original?: string } | null;
        name: string;
        type?: string;
        language?: string;
        special?: boolean;
    };
    isPopular?: boolean;
    rank?: number;
}

const MovieCard = ({ item, isPopular, rank }: Props) => {
    const imageUri = typeof item.image === 'string'
        ? item.image
        : (item.image?.medium || item.image?.original || '');

    const isPopularMovie = isPopular ?? item.special;
    const rankNumber = rank !== undefined ? rank : item.id;

    return (
        <Pressable
            className="w-[116px]"
            onPress={() =>
                router.push({
                    pathname: '/movie/[id]',
                    params: { id: String(item.id) },
                })
            }
        >
            <View className='relative'>
                <Image
                    source={{ uri: imageUri }}
                    className="h-[167px] w-[116px] rounded-[5px]"
                    resizeMode="cover"
                />
                {isPopularMovie && (
                    <Text className='absolute -bottom-[5px] -left-[5px] text-[44px] text-white font-bold'>
                        {rankNumber}
                    </Text>
                )}
            </View>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="my-[8px] text-white font-bold text-[13.5px] w-full"
            >
                {item.name}
            </Text>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-[#9CA4AB] text-[10px] font-medium w-full"
            >
                {[item.type, item.language].filter(Boolean).join(' • ')}
            </Text>
        </Pressable>
    )
}

export default MovieCard
