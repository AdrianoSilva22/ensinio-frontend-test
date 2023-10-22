import ImgIconApp from "@/images/icon-app.png";
import ImgIconComputerScren from "@/images/icon-computer-screen.png";
import ImgIconGamification from "@/images/icon-gamification.png";
import ImgIconSocial from "@/images/icon-social.png";
import '@/styles/SolutionsSubmenu.css';
import Image from "next/image";
import { useTranslation } from 'react-i18next';

export function SolutionsSubmenu() {

      const { t, i18n: { changeLanguage } } = useTranslation()

    return (
        <div className="submenu">
            <div id="title">{t('SOLUÇÕES PRINCIPAIS')}</div>
            <div className="duo-div-submenu">

                <div className="section-submenu">
                    <div id="icon-computer-screen"><Image alt="" src={ImgIconComputerScren} /></div>
                    <div id="text">
                        <h2>{t('Crie uma Escola Online')}</h2>
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="section-submenu">
                    <div id="icon-social"><Image alt="" src={ImgIconSocial} /></div>
                    <div id="text">
                        <h2>{t('Comunidade e rede social')}</h2>
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
            </div>
            <div className="duo-div-submenu">
                <div className="section-submenu">
                    <div id="icon-gamification"><Image alt="" src={ImgIconGamification} /></div>
                    <div id="text">
                        <h2>{t('Gamificação')}</h2>
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
                <div className="section-submenu">
                    <div id="icon-app"><Image alt="" src={ImgIconApp} /></div>
                    <div id="text">
                        <h2>{t('Aplicativo mobile')}</h2>
                        <span>Lorem ipsum dolor sit amet</span>
                    </div>
                </div>
            </div>
        </div>
    )
}