import { Tabs } from 'expo-router';
import { data as tabs } from "@/constants/data";
import { Image, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from 'nativewind';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

cssInterop(LinearGradient, {
    className: 'style',
});

const TabIcon = ({ focused, icon, iconTitle }: TabsProps) => {
    if (focused) {
        return (
            <LinearGradient
                colors={["#D6C7FF", "#AB8BFF"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="flex-row items-center justify-center rounded-full px-3.5 h-[38px] min-w-[80px]"
                style={{ height: 38, borderRadius: 19 }}
            >
                <Image
                    source={icon}
                    tintColor="#151312"
                    style={{ width: 18, height: 18, tintColor: "#151312" }}
                />
                <Text className="text-[#151312] text-xs font-bold ml-1.5 capitalize">
                    {iconTitle}
                </Text>
            </LinearGradient>
        );
    }

    return (
        <View className="items-center justify-center">
            <Image
                source={icon}
                tintColor="#A8B5DB"
                style={{ width: 20, height: 20, tintColor: "#A8B5DB" }}
            />
        </View>
    );
};

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarButton: (props) => (
                <Pressable
                    {...props}
                    style={[
                        props.style,
                        {
                            justifyContent: "center",
                            alignItems: "center",
                            paddingTop: 0,
                            paddingBottom: 0,
                        }
                    ]}
                />
            ),
            tabBarItemStyle: {
                height: "100%",
                padding: 0,
                paddingVertical: 0,
                justifyContent: "center",
                alignItems: "center",
            },
            tabBarStyle: {
                backgroundColor: "#0F0D23",
                borderRadius: 50,
                marginHorizontal: 20,
                bottom: insets.bottom + 10,
                height: 56,
                position: "absolute",
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#0F0D23",
                paddingHorizontal: 12,
                paddingBottom: 0,
                paddingTop: 0,
            }
        }}>
            {tabs.map((tab: TabsData) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={tab.icon}
                                iconTitle={tab.title}
                            />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
}
