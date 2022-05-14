const metaDecorator = require("./data/metaDecorator.json") //This file contain the domain of the web site its necessary to avoid errors with the link to share

const ShareButton = (imageUrl) => {
    return (

        // This button cannot be changed for normal css
        <div class="fb-share-button"
            data-href={metaDecorator.hostname + imageUrl}
            data-layout="button_count">
        </div>

    )
}

export default ShareButton