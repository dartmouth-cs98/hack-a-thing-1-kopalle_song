// File to check the status of the uploaded product set 
// Code taken from a tutorial: https://medium.com/@cwurthner/building-a-product-set-for-google-cloud-vision-product-search-ml-product-search-part-2-ba6ee9af46e

async function checkStatus() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ProductSearchClient();

  const projectId = 'product-search-290101';
  const location = 'us-east1';

  // Resource path that represents Google Cloud Platform location.
  const locationPath = client.locationPath(projectId, location);

  const [productSets] = await client.listProductSets({parent: locationPath});
  productSets.forEach(productSet => {
    console.log(`Product Set name: ${productSet.name}`);
    // console.log(`Product Set display name: ${productSet.displayName}`);
    // console.log(`Product Set display name: ${new Date(productSet.indexTime.seconds * 1000)}`);
    // console.log(`Product Set index time: ${new Date(productSet.indexTime.seconds * 1000)}`);
    console.log(`Product Set index time: ${productSet.indexTime.seconds}`);
  });
  console.warn('\n\nProduct sets with index time 0 are not ready!')

    // const [products] = await client.listProducts({parent: locationPath});
    // products.forEach(product => {
    //     console.log(`Product name: ${product.name}`);
    //     console.log(`Product id: ${product.name.split('/').pop()}`);
    //     console.log(`Product display name: ${product.displayName}`);
    //     console.log(`Product description: ${product.description}`);
    //     console.log(`Product category: ${product.productCategory}`);
    //     if (product.productLabels.length) {
    //     console.log('Product labels:');
    //     product.productLabels.forEach(productLabel => {
    //         console.log(`${productLabel.key}: ${productLabel.value}`);
    //     });
    //     }
    // });

}

checkStatus();
