import { fetchMovieSuccess, fetchMovieFailure } from "./movieSlice";

export const fetchMovie = (movieId) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTMyMWVmNDZkMzQ1NmY4NjhkOWNlZTU4ZjBkNjc2ZiIsInN1YiI6IjYyOTFjYzk1N2Q1ZGI1MTBhNjYyZGU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yDdDbXbCYbjU7sSni_N7sdKKdV1p9-NDZZfOYTFHmAg",
    },
  };

  try {
    const [movieResponse, imagesResponse] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      ),
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, options),
    ]);

    const movieData = await movieResponse.json();
    const imagesData = await imagesResponse.json();
    const imageBaseUrl = "https://image.tmdb.org/t/p/";
    const imagePath = imagesData.backdrops[0].file_path;
    const imageUrl = `${imageBaseUrl}original${imagePath}`;

    if (movieResponse.ok && imagesResponse.ok) {
      dispatch(
        fetchMovieSuccess({
          movieData,
          imagesData: imageUrl,
        })
      );
    } else {
      dispatch(fetchMovieFailure("Failed to fetch movie data or images."));
    }
  } catch (error) {
    dispatch(fetchMovieFailure(error.message));
  }
};
