import type {ImageSourcePropType} from "react-native";

declare global {
    interface TabsData {
        name: string;
        title: string;
        url: string;
        icon: ImageSourcePropType
    }

    type TabsProps = {
        focused?: boolean,
        icon: ImageSourcePropType,
        iconTitle: string
    }
}