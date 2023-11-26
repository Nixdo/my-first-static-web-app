// analyzeImage function for the Azure Image Analysis service


// This function takes an image URL and returns a promise that resolves to the response from the Azure Image Analysis service.
// 
// Note: We are only using the tags endpoint of the Azure Image Analysis service. There are many other endpoints that you can use to perform a variety of tasks. See the Azure Image Analysis service documentation for more information.
// 

// // codigo para llamar a API de Image Analysis 4.0
const url = 'https://api.imagga.com/v2/tags?image_url=https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg&version=2';
const apiKey = 'acc_0f2a4b7e4f7c2e2';
const apiSecret = 'e2b7e9b8c9d3f4a4e6f9e2d4d5a1f3b1';

const options = {
   headers: {
     Authorization: 'Basic ' + Buffer.from(apiKey + ':' + apiSecret).toString('base64')
   }
 };

// analyzeImage function for the Azure Image Analysis service
function analyzeImage() {

    document.getElementById('clicked').innerHTML = 'IMG ANALYSIS';

    /*fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));*/
}

/*const analyzeImage = async (image) => {
    // Perform the REST API call.
    const response = await onclick({
        method: 'post',
        url: 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze',
        params,
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'a6f1d3f4c9f24f9d8d1a5a1a3a2d4b4a'
        },
        data: {
            url: image
        }
    });

    return response.data;
};*/

const params = {
    visualFeatures: 'Categories,Description,Color',
    details: '',
    language: 'en'
};

export default analyzeImage;