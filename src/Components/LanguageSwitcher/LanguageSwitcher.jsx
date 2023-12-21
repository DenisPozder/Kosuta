import React, { useEffect, useState } from 'react'
import './language-switcher.css'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {

    const { i18n } = useTranslation()
    const [ showSwitcher, setShowSwitcher ] = useState(false)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        setShowSwitcher(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSwitcher(true)
        }, 1000)

        return () => clearTimeout(timer)
    },[])

  return (
    <div className={`language-switcher ${showSwitcher ? "show" : "hide"}`}>
        <div className="ls-content">
        <button className='ls-btn' onClick={() => changeLanguage('sr')}>{i18n.language === 'sr' ? 'Srpski' : 'Serbian'}</button>
        <button className='ls-btn' onClick={() => changeLanguage('en')}>{i18n.language === 'sr' ? 'Engleski' : 'English'}</button>
        </div>
    </div>
  )
}

export default LanguageSwitcher