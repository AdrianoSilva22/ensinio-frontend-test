import LanguageContext from '@/contexts/languageContext'
import imgIconFolder from '@/images/icon-folder.png'
import imgIconPlaylist from '@/images/icon-playlist.png'
import imgIconTrail from '@/images/icon-trilhas.png'
import { ItemModel } from '@/models/itemModel'
import Image from 'next/image'
import { useContext } from 'react'

interface ItemProps {
    item: ItemModel
}

export function Item(props: ItemProps) {

    const context = useContext(LanguageContext)

    return (
        <div
            id='icon-trail'
        >
            {
                props.item.id === 1 ? (
                    <Image alt='' src={imgIconTrail} className='img' />
                ) : props.item.id === 2 ? (
                    <Image alt='' src={imgIconPlaylist} className='img' />
                ) : props.item.id === 3 && (
                    <Image alt='' src={imgIconFolder} className='img' />
                )
            }
            {
                context?.selectedLanguage.value === 'pt' ? (
                    <>
                        <h2>{props.item.title.pt}</h2>
                        <p>{props.item.description.pt}</p>
                    </>
                ) : context?.selectedLanguage.value === 'en' ? (
                    <>
                        <h2>{props.item.title.en}</h2>
                        <p>{props.item.description.en}</p>
                    </>
                ) : context?.selectedLanguage.value === 'es' && (
                    <>
                        <h2>{props.item.title.es}</h2>
                        <p>{props.item.description.es}</p>
                    </>
                )
            }
        </div>
    )
}