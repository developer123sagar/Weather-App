// API Routes
export const GEO_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const WEEKS_OF_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"]