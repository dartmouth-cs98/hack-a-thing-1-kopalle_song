// File to find matching products using the updated and trained Google Vision instance
// Code taken from Google Vision docs/tutorial: https://cloud.google.com/vision/product-search/docs/searching


/*
This code file is mostly for the purpose of testing the indexed and fully set up Google Vision
instance. This method works differently than the requests sent in match-product-page.js, which is
used for the app interface.
*/

export async function matchProduct(imgFile) {

    // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');
  const fs = require('fs');
  // Creates a client
  const productSearchClient = new vision.ProductSearchClient();
  const imageAnnotatorClient = new vision.ImageAnnotatorClient();

  const projectId = 'product-search-290101';
  const location = 'us-east1';
  const productSetId = 'Footwear';
  const productCategory = 'apparel-v2';
  const filter = '';

  const productSetPath = productSearchClient.productSetPath(
    projectId,
    location,
    productSetId
  );
//   const content = fs.readFileSync(imgFile, 'base64');

  var imageFile = fs.readFileSync(imgFile);  
  // Convert the image data to a Buffer and base64 encode it.
  var content = Buffer.from(imageFile).toString('base64');

  const request = {
    image: {source: {gcsImageUri: 'gs://product-search1/1541.jpg'}},
    features: [{type: 'PRODUCT_SEARCH'}],
    imageContext: {
      productSearchParams: {
        productSet: productSetPath,
        productCategories: [productCategory],
        // filter: filter,
      },
    },
  };
  const [response] = await imageAnnotatorClient.batchAnnotateImages({
    requests: [request],
  });
  return response;
//   console.log('Search Image:', imgFile);
//   console.log(response['responses'][0]);
//   const results = response['responses'][0]['productSearchResults']['results'];
//   console.log('\nSimilar product information:');
//   results.forEach(result => {
//     console.log('Product id:', result['product'].name.split('/').pop(-1));
//     console.log('Product display name:', result['product'].displayName);
//     console.log('Product Score:', result['score']);
//     console.log('Product Image:', result['image']);
//     console.log('\n');

//   });
}

matchProduct('testImg.jpg');

