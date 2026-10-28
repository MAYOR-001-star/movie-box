import home from "@/assets/images/tabIcon/home.png"
import search from "@/assets/images/tabIcon/search.png"
import saved from "@/assets/images/tabIcon/saved.png"
import profile from "@/assets/images/tabIcon/profile.png"
import logo from "@/assets/images/project-image/company-logo.png"
import movieBg from "@/assets/images/project-image/undercover-bg.png"
import rating from "@/assets/images/icons/rating.png"
import back from "@/assets/images/icons/back.png"


export const icons = {
    home,
    search,
    saved,
    profile,
    logo,
    movieBg,
    rating,
    back,
} as const

export type IconKey = keyof typeof icons;