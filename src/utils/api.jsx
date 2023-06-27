import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },  //! Here hl means "Host Language" and gl means "geoLocation"
    headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data; 
};