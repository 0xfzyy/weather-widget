const axios = require('axios');

// 替换为你的 OpenWeatherMap API 密钥
const API_KEY = 'YOUR_API_KEY';
const CITY = 'London';

async function getWeather() {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        
        const data = response.data;
        document.getElementById('temperature').textContent = 
            `${Math.round(data.main.temp)}°C`;
        document.getElementById('location').textContent = data.name;
        document.getElementById('description').textContent = 
            data.weather[0].description;
    } catch (error) {
        console.error('Error fetching weather:', error);
        document.getElementById('description').textContent = 'Error loading weather data';
    }
}

// 每30分钟更新一次天气
getWeather();
setInterval(getWeather, 30 * 60 * 1000);

// 实现拖拽功能
const dragArea = document.querySelector('.drag-area');
dragArea.addEventListener('mousedown', (e) => {
    window.electron.startDrag(e);
});