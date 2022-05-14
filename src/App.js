import React from 'react';
import './App.css';
import injectFbSDKScript from './helpers/sdk-fb'
import Head from './head'//Import component that contains Helmet elements (META data labels)
import imageURL from './x-men.png'
const metaDecorator = require("./data/metaDecorator.json") //This file contain the domain of the web site its necessary to avoid errors with the link to share

function App() {

  const title = 'Titulo que ira en la etiqueta META';
  const description = 'Descripcion de la etiqueta META';

  return (
    <div className='App' id="app">

      <div id="fb-root"></div> {/* Its necessary to mount the SDK */}

      {
        // Injects the Facebook SDK into the page
        injectFbSDKScript()
      }

      <Head //It is the component that receives the strings that are inserted in the meta tags automatically
        title={title}
        description={description}
        imageUrl={imageURL}
      />

      {/* IMPORTANT!!! 
      The imageUrl must be the same parameter for META labels and button of share 
      */}

      {/* This button must be changed for normal css */}
      <div class="fb-share-button"
        data-href={metaDecorator.hostname + imageURL}
        data-layout="button_count">
      </div>

    </div>
  );
}

export default App;