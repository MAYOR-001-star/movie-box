import type {ImageSourcePropType} from "react-native";

export interface TabsData {
    name: string;
    title: string;
    url: string;
    icon: ImageSourcePropType;
}

export interface TabsProps {
    focused?: boolean;
    icon: ImageSourcePropType;
    iconTitle: string;
}

export interface TVMazeShow {
    id: number;
    url?: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number | null;
    averageRuntime?: number | null;
    premiered: string;
    ended?: string | null;
    officialSite?: string | null;
    schedule?: {
        time: string;
        days: string[];
    };
    rating: {
        average: number | null;
    };
    weight?: number;
    network?: {
        id: number;
        name: string;
        country?: {
            name: string;
            code: string;
            timezone: string;
        };
        officialSite?: string | null;
    } | null;
    webChannel?: {
        id: number;
        name: string;
        country?: any;
        officialSite?: string | null;
    } | null;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    updated?: number;
    savedAt?: string;
    // Hardcoded UI properties we cannot do without
    special?: boolean;
}

export interface TVMazePerson {
    id: number;
    url?: string;
    name: string;
    character?: string;
    country?: {
        name: string;
        code: string;
        timezone: string;
    } | null;
    birthday?: string | null;
    deathday?: string | null;
    gender?: string;
    image: {
        medium: string;
        original: string;
    };
}