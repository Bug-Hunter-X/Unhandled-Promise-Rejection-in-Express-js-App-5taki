const express = require('express');
const app = express();
app.get('/', (req, res) => {
  getData().then((data) => {
    res.send(data);
  }).catch((error) => {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  });
});

async function getData() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve({ success: true, data: 'Some data' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}