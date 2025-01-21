const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetch data from a database or external API
  getData((data) => {
    // Send the data in the response
    res.send(data);
  });
});

function getData(callback) {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a successful operation
      callback({ success: true, data: 'Some data' });
    } else {
      // Simulate a failure
      callback({ success: false, error: 'Failed to fetch data' });
    } 
  }, 1000);
}