
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/src/components/Header'
import MovieCard from '@/src/components/MovieCard'
import { movies, moviesss } from '@/constants/data'
import { TVMazeShow } from '@/types'

const Index = () => {
    const [moviesList, setMoviesList] = useState<TVMazeShow[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/shows");

                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }

                const data = await response.json();
                setMoviesList(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (isLoading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator color="#b093ff" size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>{error}</Text>
            </View>
        );
    }

    const ListHeader = () => (
        <View>
            <Header />

            <View className="mx-[18px] my-[30px]">
                <Text className="mb-[14px] text-white text-[18px] font-bold">
                    Popular movies
                </Text>

                <FlatList
                    data={moviesList.slice(0, 5)}
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
            </View>

            <Text className="mb-[14px] text-white text-[18px] font-bold">
                Latest movies
            </Text>
        </View>
    )

    return (
        <SafeAreaView className="flex-1 bg-[#030014]">
            <FlatList
                data={moviesList.slice(0, 12)}
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
