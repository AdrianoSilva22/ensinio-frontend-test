'use client'

import { Item } from '@/components/Item'
import LanguageContext from '@/contexts/languageContext'
import imgIntersect from '@/images/Intersect.png'
import imgPlay from '@/images/Play.png'
import imgDevices from '@/images/devices.png'
import imgIconRightwardArrow from '@/images/iconRightwardArrow.png'
import imgIconRocket from '@/images/iconRocket.png'
import imgMan from '@/images/imageMan.png'
import '@/lib/i18n'
import { ItemModel } from '@/models/itemModel'
import { ItemService } from '@/services/itemService'
import '@/styles/sectionBottom.css'
import '@/styles/sectionTop.css'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {

  const context = useContext(LanguageContext)

  const { findAllItems } = ItemService()

  const { t, i18n: { changeLanguage } } = useTranslation()
  const [items, setItems] = useState<ItemModel[]>([])

  useEffect(() => {
    const handleChangeLanguage = () => {
      if (context) {
        const newLanguage = context.selectedLanguage.value
        changeLanguage(newLanguage)
      }
    }
    handleChangeLanguage()
  }, [context?.selectedLanguage])

  useEffect(() => {
    const findAll = async () => {
      try {
        const itemsResponse = await findAllItems()
        setItems(itemsResponse.data)
      } catch (e) {
        console.log(e)
      }
    }
    findAll()
  }, [])

  return (
    <>
      <section className="top-section">

        <div className='div-top-left'>

          <div className='div-devices-text'>
            <Image alt='Image Devices' src={imgDevices} className='imgDevices' />
            <span>{t('PLATAFORMA')} ALL IN ONE</span>
          </div>

          <h1>{t('Sua escola online poderosa e lucrativa')}</h1>

          <p>{t('Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.')}</p>

          <div className='div-button-play'>
            <button type='button'>{t('Começar agora')}</button>
            <Image alt='image play' src={imgPlay} />
            <a href='' id='watch video'>{t('Ver vídeo')}</a>
          </div>
        </div>
        <div className='div-top-right'>
          <Image alt='image intersect' src={imgIntersect} className='img-intersect' />
          <Image alt='image man' src={imgMan} className='img-man' />
        </div>
      </section>
      <section className="bottom-section">
        <div className='div-detail-oriented-message'>
          <div id='border-detail'></div>
          <span>{t('PENSAMOS EM CADA DETALHE')}</span>
          <a href=''> {t('Conheça alguns dos nossos recursos')}  ⚡️</a>
          <h2>{t('Queremos que o aluno se sinta confortável enquanto aprende')}</h2>
        </div>

        <div className='div-icons-text'>
          {
            items.map((item) => (
              <Item
                key={item.id}
                item={item}
              />
            ))
          }
        </div>

        <div className='section-bottom-terminal'>
          <div className='left-side-terminal'>
            <Image alt='image icon rocket' src={imgIconRocket} id='img-icon-rocket' />
            <p>{t('Veja todos os outros recursos disponíveis para te ajudar')}</p>
          </div>
          <div className='right-side-terminal'>
            <a href='/'>
              <div id='div-view-more'>
                {t('Ver mais')}
                <Image alt='' src={imgIconRightwardArrow} id='img-icon-arrow' />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
