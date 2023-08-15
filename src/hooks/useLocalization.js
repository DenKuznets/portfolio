import { create } from "zustand";
import { localization } from "../js/localizaion";

const useLocalization = create((set) => ({
    // local: navigator.language === "ru" ? localization.ru : localization.en,
    local: localization.ru,
    changeToRu: () => set(() => ({ local: localization.ru })),
    changeToEn: () => set(() => ({ local: localization.en })),
}));

export default useLocalization