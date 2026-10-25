import {View, Image, TextInput, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {icons} from "@/constants/icons";

const Header = () => {
    const [text, setText] = useState('');

    return (
        <View>
            <View className="relative">
                <View className="w-full absolute">
                    <Image source={icons.movieBg} className="w-full"/>
                </View>
            </View>
            <ScrollView>
                <View className="px-[1rem]">
                    <View className="mt-[10px] mb-[24px] mx-auto w-full flex flex-row justify-center">
                        <Image source={icons.logo} className="w-[59px] h-[43px]"/>
                    </View>
                    <View
                        className="px-[14px] py-[8px] text-[14px] mb-[50px] flex flex-row justify-left gap-[10px] items-center bg-[#0F0D23] rounded-[30px]">
                        <View>
                            <Image source={icons.search} tintColor="#AB8BFF" className="size-[1rem]"/>
                        </View>
                        <TextInput
                            placeholder="Search through 300+ movies online"
                            placeholderTextColor="#A8B5DB"
                            value={text}
                            onChangeText={(newValue) => setText(newValue)}
                            className="rounded-[30px] text-white w-full"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Header
