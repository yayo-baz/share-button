import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'; //This dependency injects the META labels code in the head of the HTML

const metaDecorator = require("./data/metaDecorator.json") //This file contain the domain of the web site its necessary to avoid errors with the link to share

const Head = ({ title, description, imageUrl }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
                <meta property='og:image:width' content='400' />
                <meta property='og:image:height' content='300' />
                <meta property="og:url" content={metaDecorator.hostname + window.location.pathname + window.location.search} />
                <meta property="og:type" content="website" />
            </Helmet>
        </HelmetProvider>
    )
}

export default Head