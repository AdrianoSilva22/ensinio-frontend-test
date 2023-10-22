import { OptionLanguage } from '@/app/layout';
import { Dispatch, SetStateAction, createContext } from 'react';

export interface LanguageContextProps {
    selectedLanguage: OptionLanguage
    setSelectedLanguage: Dispatch<SetStateAction<OptionLanguage>>
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export default LanguageContext