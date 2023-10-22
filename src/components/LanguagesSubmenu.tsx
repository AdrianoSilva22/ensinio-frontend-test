'use client'

import { OptionLanguage } from '@/app/layout';
import LanguageContext from '@/contexts/languageContext';
import checkMarkSquare from '@/images/checkmark-square.png';
import imgLanguageEn from '@/images/img-language-en.png';
import imgLanguageEs from '@/images/img-language-es.png';
import imgLanguagePt from '@/images/img-language-pt.png';
import '@/styles/languagesSubmenu.css';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext } from 'react';

interface LanguagesSubmenuProps {
    setShowLanguages: Dispatch<SetStateAction<boolean>>
    showLanguages: boolean
}

export function LanguagesSubmenu(props: LanguagesSubmenuProps) {

    const context = useContext(LanguageContext)

    const options: OptionLanguage[] = [
        { value: 'pt', image: imgLanguagePt },
        { value: 'es', image: imgLanguageEs },
        { value: 'en', image: imgLanguageEn },
    ]

    const handleOnMouseMove = () => {
        props.setShowLanguages(true)
    }

    const handleOnMouseLeave = () => {
        props.setShowLanguages(false)
    }

    if (!context) {
        return null
    }

    return (
        <div
            className="custom-select"
            onMouseMove={handleOnMouseMove}
            onMouseLeave={handleOnMouseLeave}
        >
            {
                options.map((option, index) => (
                    <div
                        key={index}
                        className='div-option-idiomas'
                        onMouseMove={handleOnMouseMove}
                        onClick={() => context.setSelectedLanguage(option)}
                        style={context.selectedLanguage?.value === option.value ?
                            { background: 'linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0) 100%)' }
                            : {}
                        }
                    >
                        <Image onMouseMove={handleOnMouseMove} src={option.image} alt="" />
                        {
                            context.selectedLanguage?.value === option.value && (
                                <Image alt='image check' src={checkMarkSquare} className='checkMarkSquare' />
                            )
                        }

                    </div>
                ))
            }
        </div>
    )
}