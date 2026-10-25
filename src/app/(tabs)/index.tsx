import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/Header";
import MovieCard from "@/src/components/MovieCard";
import { movies, moviesss } from '@/constants/data';

const Index = () => {
    return (
        <SafeAreaView className="bg-transparent flex-1">
            <ScrollView className="bg-[#030014] h-full">
                <Header />
                <View className='my-[30px] mx-[18px]'>
                    <Text className="mb-[14px] text-white text-[18px] font-bold">Popular movies</Text>
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
                <View>
                    <FlatList
                        data={movies}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        numColumns={3}
                        ListHeaderComponent={<Text className="mb-[14px] text-white text-[18px] font-bold">Latest movies</Text>}
                        contentContainerStyle={{
                            marginTop: 20,
                            marginBottom: 50,
                            marginHorizontal: 10,
                        }}
                        columnWrapperStyle={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 40,
                            gap: 10,
                        }}
                        renderItem={({ item }) => (
                            <MovieCard item={item} />
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Index

