import { router } from 'expo-router';
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

interface Props {
    item: {
        id: number | string;
        image?: string | { medium?: string; original?: string };
        name: string;
        type?: string;
        language?: string;
        special?: boolean;
    };
}

const MovieCard = ({ item }: Props) => {
    const imageUri = typeof item.image === 'string'
        ? item.image
        : (item.image?.medium || item.image?.original || '');

    return (
        <Pressable
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
                {item.special && <Text className='absolute -bottom-[5px] -left-[5px] text-[44px] text-white font-bold'>{item.id}</Text>}
            </View>
            <Text className="my-[8px] text-white font-bold text-[13.5px]">
                {item.name}
            </Text>
            <Text className="text-[#9CA4AB] text-[10px] font-medium">
                {item.type} • {item.language}
            </Text>
        </Pressable>
    )
}

export default MovieCard
