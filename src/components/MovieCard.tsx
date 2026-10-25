import { router } from 'expo-router';
import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

interface Props {
    item: {
        id: number | string;
        image: string;
        name: string;
        type: string;
        language: string;
    };
}

const MovieCard = ({ item }: Props) => {
    return (
        <Pressable
            onPress={() =>
                router.push({
                    pathname: '/movie/[id]',
                    params: { id: String(item.id) },
                })
            }
        >
            <View>
                <Image
                    source={{ uri: item.image }}
                    className="h-[167px] w-[116px] rounded-[5px]"
                    resizeMode="cover"
                />
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
