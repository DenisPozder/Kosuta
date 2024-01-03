import React from 'react'
import './contact-component.css'
import doe from '../../../../Assets/Hall/doe.jpg'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const ContactComponent = () => {

  const { t, i18n } = useTranslation('hallContact')

  return (
    <div className="contact-component">
        <LazyLoadImage src={doe} alt="Slika košute" />
        <div className="cc-wrap">
            <div className="cc-content">
                <h1 className='cc-title'><span className='cc-span1'>{t('hcTitle1')}</span><span className='cc-span2'>{t('hcTitle2')}</span></h1>
                <p className='cc-desc'>{t('hcDesc')}</p>
                <div className="cc-btns">
                    <Link to={'tel:066 52 555 25'} className='cc-call'><h3><span>{i18n.language === 'sr' ? 'telefon: ' : 'phone: '}</span><span>066 52 555 25</span></h3></Link>
                    <div className='cc-email'><h3><span>EMAIL: </span><span>info@kosuta.rs</span></h3></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactComponent