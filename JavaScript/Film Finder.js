const tmdbKey = '2ad19d1d7ecc27cc1eb4705f5df26a88';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = 'https://api.themoviedb.org/3/genre/movie/list';
  let requestParams = `?api_key`+`tmdbKey`;
  let urlToFetch = `$tmdBaseUrl+ $genreRequestEndpoint + $requestParams`;
  try {
    let response = await fetch(urlToFetch, 
    { method: "GET" });
    if (response.ok) {
      let jsonResponse = response.json();
      console.log(jsonResponse);
      let genres = jsonResponse.genres;
      console.log(genres);
      return genres;
    }
  }
  catch(err) {
    console.log(err);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const dicoverMovieEndpoit = '/discover/movie';
  let requestParams = `?api_key=tmdbKey&with_genres=selectedGenre`;
  let urlToFetch = `$tmdBaseUrl+ $discoverMovieEndpoint + $requestParams`;

  try {
    let response = await fetch(urlToFetch, 
      { method: "GET" });
      if (response.ok) {
        let jsonResponse = response.json();
        console.log(jsonResponse);
        let movies = jsonResponse.results;
        console.log(movies);
        return movies;
    }
  }
    catch(err) {
      console.log(err);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  let requestParams = `?api_key=tmdbKey`;
  let urlToFetch = `$tmdBaseUrl+ $movieEndpoint + $requestParams`;

  try {
    let response = await fetch(urlToFetch, 
      { method: "GET" });
      if (response.ok) {
        let movieInfo = response.json();
        return movieInfo;
    }
  }
  catch(err) {
    console.log(err);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };


  let movies = getMovies();
  let randomMovie = getRandomMovie();
  let info = getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
