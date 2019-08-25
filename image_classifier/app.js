// This will hold the javascript code.

let net;

// Create function to classify image.
async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);
}

// Call and run function to classify image.
app();
