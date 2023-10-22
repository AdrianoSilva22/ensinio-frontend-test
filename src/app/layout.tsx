'use client'

import { Navbar } from '@/components/Navbar'
import LanguageContext from '@/contexts/languageContext'
import imgIconCertified from '@/images/icon-certified.png'
import imgLanguagePt from '@/images/img-language-pt.png'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Ensinio',
  description: '',
}

export interface OptionLanguage {
  value: string
  image: StaticImageData
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [selectedLanguage, setSelectedLanguage] = useState<OptionLanguage>({ value: 'pt', image: imgLanguagePt })

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
          <Navbar />
          <Image alt='icon certified' src={imgIconCertified} id='img-icon-certified' />
          {children}
        </LanguageContext.Provider>
      </body>
    </html>
  )
}
