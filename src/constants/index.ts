// API Routes
export const GEO_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "f6c9dc1ff6e86a66202a01e267dfdf8f";

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "256fec945emsh061095156006dc0p10dbadjsna05005108a28",
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const WEEKS_OF_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"]