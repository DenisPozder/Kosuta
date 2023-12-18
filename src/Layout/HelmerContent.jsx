import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const HelmerContent = ({ title, description, keywords, canonical }) => {
  return (
    <HelmetProvider>
        <Helmet>
            <title>{`${title} - Košuta`}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel='canonical' href={canonical} />
        </Helmet>
    </HelmetProvider>
  )
}

export default HelmerContent