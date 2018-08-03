const axios = require('axios');
const keys = require('../config/keys');

const path = 'https://api.themoviedb.org/3/movie';

module.exports = app => {
  app.get('/api/movies/popular', async (req, res) => {
    const response = await axios.get(
      `${path}/popular?api_key=${keys.tmdbKey}&language=en-US&page=1&region=US`
    );
    res.send(response.data);
  });

  app.get('/api/movies/now_playing', async (req, res) => {
    const response = await axios.get(
      `${path}/now_playing?api_key=${
        keys.tmdbKey
      }&language=en-US&page=1&region=US`
    );
    res.send(response.data);
  });

  app.get('/api/movies/top_rated', async (req, res) => {
    const response = await axios.get(
      `${path}/top_rated?api_key=${
        keys.tmdbKey
      }&language=en-US&page=1&region=US`
    );
    res.send(response.data);
  });

  app.get('/api/movies/upcoming', async (req, res) => {
    let currentPage = 0;
    let morePagesAvailable = true;
    const data = [];
    let tmdbUpcoming;
    while (morePagesAvailable) {
      currentPage++;
      tmdbUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
        keys.tmdbKey
      }&language=en-US&page=${currentPage}&region=US`;
      const response = await axios.get(tmdbUpcoming);
      const { results, total_pages } = response.data;
      results.forEach(res => data.unshift(res));
      morePagesAvailable = currentPage < total_pages;
    }
    res.send(data);
  });
};
