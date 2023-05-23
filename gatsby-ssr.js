// gatsby-ssr.js

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key='Mistral'
            rel='preload'
            href='/fonts/Mistral.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
        />,
        <link
            key='Manrope'
            rel='preload'
            href='/fonts/Manrope-VariableFont_weight.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
        />,
    ])
}
