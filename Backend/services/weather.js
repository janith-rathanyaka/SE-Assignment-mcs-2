const axios = require('axios');
const { OPENWEATHER_API_KEY } = process.env;

const getWeather = async (location) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${OPENWEATHER_API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("wrong location")
  }
  
};

module.exports = { getWeather };