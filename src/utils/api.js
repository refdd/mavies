import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const api = {
  fetchMovies: async (url) => {
    const response = await axios.get(url);
    return response.data;
  },
};

export default api;
