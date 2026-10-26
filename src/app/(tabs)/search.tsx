
import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/src/components/Header'
import MovieCard from '@/src/components/MovieCard'
import { movies, moviesss } from '@/constants/data'

const Index = () => {
    const [search, setSearch] = useState<boolean>(true);
    const ListHeader = () => (
        <View>
            <Header search={search} />
            <View className="mx-[18px] my-[30px]">
                <Text className="mb-[14px] text-white text-[18px] font-bold">
                    Popular movies
                </Text>

                <FlatList
                    data={moviesss}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={{
                        gap: 10,
                    }}
                    renderItem={({ item }) => (
                        <MovieCard item={item} />
                    )}
                />
            </View>

            <Text className="mb-[14px] text-white text-[18px] font-bold">
                Latest movies
            </Text>
        </View>
    )

    return (
        <SafeAreaView className="flex-1 bg-[#030014]">
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                bounces={false}
                ListHeaderComponent={ListHeader}
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
        </SafeAreaView>
    )
}

export default Index
