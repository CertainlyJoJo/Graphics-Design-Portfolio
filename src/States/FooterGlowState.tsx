import {create} from "zustand"

type FooterGlowStore = {
    triggerGlow: boolean;
    setGlow: () => void
}

export const useFooterGlowStore = create<FooterGlowStore>((set) => ({
    triggerGlow : false,

    setGlow: () => {
        setTimeout(() => {
            set(() => ({
                triggerGlow: true
            }))
        }, 300)
        setTimeout(() => {
            set(() => ({
                triggerGlow: false
            }))
        }, 3500)
    }

}))