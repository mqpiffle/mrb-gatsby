// gatsby-ssr.js

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key='Mistral'
            rel='preload'
            href='/fonts/mistral-webfont.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
        />,
        <link
            key='Mistral'
            rel='preload'
            href='/fonts/Mistral.ttf'
            as='font'
            type='font/ttf'
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
