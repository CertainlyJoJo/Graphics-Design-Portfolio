import {create} from "zustand"

type FooterGlowStore = {
    triggerGlow: boolean;
    setGlow: () => void
}

export const useFooterGlowStore = create<FooterGlowStore>((set) => ({
    triggerGlow : false,

    setGlow: () => {
        set(() => ({
            triggerGlow: true
        }))
        setTimeout(() => {
            set(() => ({
                triggerGlow: false
            }))
        }, 1000)
    }
    
}))