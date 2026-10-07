import home from "@/assets/images/tabIcon/home.png"
import search from "@/assets/images/tabIcon/search.png"
import saved from "@/assets/images/tabIcon/saved.png"
import profile from "@/assets/images/tabIcon/profile.png"


export const icons = {
    home,
    search,
    saved,
    profile,
} as const

export type IconKey = keyof typeof icons;