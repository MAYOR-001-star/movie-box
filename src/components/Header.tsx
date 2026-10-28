import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from "@/constants/icons";

interface HeaderProps {
    search?: boolean;
    searchQuery?: string;
    onSearchChange?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onClear?: () => void;
}

const Header = ({ search, searchQuery, onSearchChange, onFocus, onBlur, onClear }: HeaderProps) => {
    const [localQuery, setLocalQuery] = useState('');

    const queryValue = searchQuery !== undefined ? searchQuery : localQuery;
    const handleTextChange = onSearchChange || setLocalQuery;

    const handleClear = () => {
        handleTextChange('');
        onClear?.();
    };

    return (
        <View>
            <View className="relative">
                <View className="w-full absolute">
                    <Image source={icons.movieBg} className="w-full"/>
                </View>
            </View>
            <View className="px-[1rem]">
                <View className="mt-[10px] mb-[24px] mx-auto w-full flex flex-row justify-center">
                    <Image source={icons.logo} className="w-[59px] h-[43px]"/>
                </View>
                {search && (
                    <View className="px-[14px] py-[8px] text-[14px] mb-[30px] flex flex-row items-center bg-[#0F0D23] rounded-[30px] border border-[#221F3D]">
                        <View className="mr-[10px]">
                            <Image source={icons.search} tintColor="#AB8BFF" className="size-[1rem]"/>
                        </View>
                        <TextInput
                            placeholder="Search through 300+ movies online"
                            placeholderTextColor="#A8B5DB"
                            value={queryValue}
                            onChangeText={handleTextChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            className="rounded-[30px] text-white flex-1 py-1"
                        />
                        {queryValue.length > 0 && (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={handleClear}
                                className="w-6 h-6 items-center justify-center rounded-full bg-[#221F3D] ml-2"
                            >
                                <Text className="text-[#A8B5DB] text-[12px] font-bold">✕</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>
        </View>
    )
}
export default Header
