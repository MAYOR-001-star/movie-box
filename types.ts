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

export interface Movie {
    id: string;
    title: string;
    poster: string;
    rating: number;
    year: number;
    genres: string[];
    category: string;
}

export interface MovieDetails extends Movie {
    backdrop: string;
    voteCount: string;
    seasons: number;
    certification: string;
    duration: string;
    overview: string;
    releaseDate: {
        label: string;
        status: string;
    };
    countries: string[];
    budget: string;
    revenue: string;
    tagline: string;
    productionCompanies: string[];
}