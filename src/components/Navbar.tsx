'use client'

import LanguageContext from '@/contexts/languageContext'
import imgArrow from '@/images/Arrow.png'
import imgUserBody from '@/images/User/UserBody.png'
import imgUserBow from '@/images/User/userBow.png'
import imgUserHead from '@/images/User/userHead.png'
import imgLogo from '@/images/logoEnsinio.png'
import '@/styles/navbar.css'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguagesSubmenu } from './LanguagesSubmenu'
import { SolutionsSubmenu } from './SubmenuSolucoes'

export function Navbar() {
    const { t, i18n: { changeLanguage, language } } = useTranslation()
    const context = useContext(LanguageContext)

    const [showSolutions, setShowSolutions] = useState(false)
    const [showLanguages, setShowLanguages] = useState(false)

    enum OptionEnum {
        SOLUTION,
        LANGUAGE
    }

    const handleOnMouseMove = (option: OptionEnum) => {
        if (option === OptionEnum.SOLUTION) {
            setShowSolutions(true)
        } else if (option === OptionEnum.LANGUAGE) {
            setShowLanguages(true)
        }
    }

    const handleOnMouseLeave = (option: OptionEnum) => {
        if (option === OptionEnum.SOLUTION) {
            setShowSolutions(false)
        } else if (option === OptionEnum.LANGUAGE) {
            setShowLanguages(false)
        }
    }

    if (!context) {
        return null
    }

    return (
        <div className='div-container'>
            <nav className="navbar">
                <div className='div-menu-logo'>
                    <Image alt='' src={imgLogo} />
                </div>
                <div className='desfoque-icon-playlist-left'></div>
                <div id='desfoque-nav-top'></div>
                <div className='div-menu-opcoes-navegacao'>
                    <ul className='menu-list'>
                        <li>
                            <a href=''
                                onMouseMove={() => handleOnMouseMove(OptionEnum.SOLUTION)}
                                onMouseLeave={() => handleOnMouseLeave(OptionEnum.SOLUTION)}
                            >
                                {t('Soluções')}
                                <Image alt='' src={imgArrow} className='arrow' />
                                {
                                    showSolutions && <SolutionsSubmenu />
                                }
                            </a>
                        </li>
                        <li>
                            <a href='/'>{t('Preços')}</a>
                        </li>
                        <li>
                            <a href='/'>{t('Academy')}</a>
                        </li>
                        <li>
                            <a href='/'>{t('Blog')}</a>
                        </li>
                        <li>
                            <a href=''>{t('Contato')}</a>
                        </li>
                    </ul>
                </div>
                <div className='line-3'></div>
                <div className='div-menu-acesso'>
                    <ul className='menu-list'>
                        <div className='user-icon'>
                            <Image alt='' src={imgUserBow} id='bow' />
                            <Image alt='' src={imgUserHead} />
                            <Image alt='' src={imgUserBody} />
                        </div>
                        <div className='desfoque-nome-entrar'></div>
                        <li>
                            <a href="">{t('Entrar')}</a>
                        </li>
                        <li id='comecar-agora'>
                            <a href="">{t('Começar agora')}</a>
                        </li>
                        <li
                            id='li-language'
                            onMouseMove={() => handleOnMouseMove(OptionEnum.LANGUAGE)}
                        >
                            {

                                context.selectedLanguage?.value === 'pt' ? (
                                    'PT'
                                ) : context.selectedLanguage?.value === 'en' ? (
                                    'EN'
                                ) : context.selectedLanguage?.value === 'es' && (
                                    'ES'
                                )
                            }
                            <Image alt='' src={imgArrow} className='arrow' />
                            {
                                showLanguages &&
                                <LanguagesSubmenu
                                    showLanguages={showLanguages}
                                    setShowLanguages={setShowLanguages}
                                />
                            }
                        </li>
                        <div className='desfoque-icon-playlist-right'></div>
                    </ul>
                </div>
            </nav >
        </div>
    )
}