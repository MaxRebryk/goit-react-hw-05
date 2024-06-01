import axios from 'axios';
export async function getData() {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2E1OWQxMjg3NThjNmUyNWFjN2JmM2ViN2Q5YmFkMSIsInN1YiI6IjY2NTllNzczYmNlMmFjOTY4OTUwOTRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDeS6POmNr2XgcmjO4s375gTaKJg_qvAZSwekqqTca0',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getDetails(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2E1OWQxMjg3NThjNmUyNWFjN2JmM2ViN2Q5YmFkMSIsInN1YiI6IjY2NTllNzczYmNlMmFjOTY4OTUwOTRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDeS6POmNr2XgcmjO4s375gTaKJg_qvAZSwekqqTca0',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getCredits(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2E1OWQxMjg3NThjNmUyNWFjN2JmM2ViN2Q5YmFkMSIsInN1YiI6IjY2NTllNzczYmNlMmFjOTY4OTUwOTRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDeS6POmNr2XgcmjO4s375gTaKJg_qvAZSwekqqTca0',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getReviews(movieId) {
  const url = `
  https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2E1OWQxMjg3NThjNmUyNWFjN2JmM2ViN2Q5YmFkMSIsInN1YiI6IjY2NTllNzczYmNlMmFjOTY4OTUwOTRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDeS6POmNr2XgcmjO4s375gTaKJg_qvAZSwekqqTca0',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getSearchResults(searchRequest) {
  const url = `
  https://api.themoviedb.org/3/search/movie`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2E1OWQxMjg3NThjNmUyNWFjN2JmM2ViN2Q5YmFkMSIsInN1YiI6IjY2NTllNzczYmNlMmFjOTY4OTUwOTRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDeS6POmNr2XgcmjO4s375gTaKJg_qvAZSwekqqTca0',
    },
    params: {
      query: searchRequest,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
