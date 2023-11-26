import React from 'react';
import analyzeImage from './azure-image-analysis.js';

function App() {
  return (
    <div>
      <div><h1 style={{ fontSize: 40 }}>Hello World!</h1></div>
      <input type="text" placeholder="URL" />
      <div>
        <button id='analyzeB' onClick="analyzeImage()">Analyze</button>
        <button>Generate</button>
        <p id='clicked'></p>
      </div>      
    </div>
  );
}

// codigo para llamar a API de Image Analysis 4.0

const url = 'https://api.imagga.com/v2/tags?image_url=https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg&version=2';
const apiKey = 'acc_0f2a4b7e4f7c2e2';
const apiSecret = 'e2b7e9b8c9d3f4a4e6f9e2d4d5a1f3b1';

const options = {
  headers: {
    Authorization: 'Basic ' + Buffer.from(apiKey + ':' + apiSecret).toString('base64')
  }
};

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

export default App;
