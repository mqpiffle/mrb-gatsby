// gatsby-ssr.js

import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key='Mistral'
            rel='preload'
            href='/opt/render/project/src/public/uploads/fonts/mistral-webfont.woff'
            as='font'
            type='font/woff'
            crossOrigin='anonymous'
        />,
        <link
            key='Manrope'
            rel='preload'
            href='/opt/render/project/src/public/uploads/fonts/Manrope-VariableFont_weight.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
        />,
    ])
}
