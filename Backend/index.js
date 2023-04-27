const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors())
// Import environment variables
require('dotenv').config();

const { getWeather } = require('./services/weather');

app.get('/api/weather/:location', async (req, res) => {
    const { location } = req.params;
    try {
      const data = await getWeather(location);
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});