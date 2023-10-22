'use client'

import LanguageContext from '@/contexts/languageContext'
import imgUserBody from '@/images/User/UserBody.png'
import imgUserBow from '@/images/User/userBow.png'
import imgUserHead from '@/images/User/userHead.png'
import imgArrow from '@/images/arrow.png'
import imgIconPlaylistLeft from '@/images/icon-playlist-left.png'
import imgIconPlaylistRight from '@/images/icon-playlist-right.png'
import imgLogo from '@/images/logoEnsinio.png'
import '@/styles/navbar.css'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguagesSubmenu } from './LanguagesSubmenu'
import { SolutionsSubmenu } from './SubmenuSolucoes'


export function Navbar() {
    const { t } = useTranslation()

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

    useEffect(() => {
        const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement
        const navList = document.querySelector('.menu-list') as HTMLElement
        const navLinks = document.querySelectorAll('.menu-list li')

        const animateLinks = () => {
            Array.from(navLinks).forEach((link: any, index: number) => {
                link.style.animation
                    ? (link.style.animation = '')
                    : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
            })
        }

        const handleClick = () => {
            navList.classList.toggle('active')
            mobileMenu.classList.toggle('active')
            animateLinks()
        }

        if (mobileMenu) {
            mobileMenu.addEventListener('click', handleClick)
        }

        return () => {
            if (mobileMenu) {
                mobileMenu.removeEventListener('click', handleClick)
            }
        }
    }, [])

    if (!context) {
        return null
    }

    return (
        <div className='div-container'>
            <Image alt='icon playlist right' src={imgIconPlaylistRight} id='icon-playlist-right' />
            <Image alt='icon playlist left' src={imgIconPlaylistLeft} id='icon-playlist-left' />
            <div className='desfoque-icon-playlist-right'></div>
            <div id='desfoque-nav-top'></div>
            <nav className="navbar">
                <div className='desfoque-icon-playlist-left'></div>
                <div className='div-menu-logo'>
                    <Image alt='' src={imgLogo} />
                </div>
                <div className='div-menu-opcoes-navegacao'>
                    <div className='div-menu-acesso'>
                        <ul className='menu-list'>
                            <li id='li-solutions'>
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
                            <div className='line-3'></div>
                            <div className='user-icon'>
                                <Image alt='image user bow' src={imgUserBow} id='bow' />
                                <Image alt='image user head' src={imgUserHead} />
                                <Image alt='image user body' src={imgUserBody} />

                                <div className='desfoque-nome-entrar'></div>
                            </div>
                            <li>
                                <a href="">{t('Entrar')}</a>
                            </li>
                            <li id='start-now'>
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
                                <Image alt='image arrow' src={imgArrow} className='arrow' />
                                {
                                    showLanguages &&
                                    <LanguagesSubmenu
                                        showLanguages={showLanguages}
                                        setShowLanguages={setShowLanguages}
                                    />
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav >
        </div>
    )
}