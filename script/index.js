
function getPopularMovies() {
  fetch("https://imdb-api.com/API/MostPopularMovies/k_6f75ijyi")
    .then((response) => response.json())
    .then((data) => {
      const popularMoviesDiv = document.getElementById("popularMovie");

      const popularMovies = data.items;

      var content = '';

      popularMovies.slice(0, 15).map(popularMovie => {
        content += `<div class="card">
        <img src="${popularMovie.image}" alt="">
  <div class="descriptions">
            <p class="movie-text">
            <br><span class="bold-title">rank:</span> ${popularMovie.rank}<br>
                <span class="bold-title">title:</span>${popularMovie.title}<br>
                <span class="bold-title">crew:</span> ${popularMovie.crew}<br>
                <span class="bold-title">Rate:</span> ${popularMovie.imDbRating}<br>
                <span class="bold-title">rankUpDown:</span> ${popularMovie.rankUpDown}<br>
                <span class="bold-title">release-year:</span>${popularMovie.year}<br>
            </p>
            <button id="Trailer" type="button">  Watch Trailer</button>
        </div>
    </div>`;
      });
      popularMoviesDiv.innerHTML += content;
    });
    
}

getPopularMovies();

function getPopularTvShows() {
  fetch("https://imdb-api.com/API/MostPopularTVs/k_6f75ijyi")
    .then((response) => response.json())
    .then((data) => {
      const popularTVsDiv = document.getElementById("popularTV");

      const popularTVs = data.items;

      var content = ''; 

      popularTVs.slice(0, 15).map(popularTV => {
        content += `<div class="card">
        <img src="${popularTV.image}" alt="">
  <div class="descriptions">
            <p class="movie-text">
            <br><span class="bold-title">rank:</span> ${popularTV.rank}<br>
                <span class="bold-title">title:</span>${popularTV.title}<br>
                <span class="bold-title">crew:</span>${popularTV.crew}<br>
                <span class="bold-title">Rate:</span> ${popularTV.imDbRatingCount}<br>
                <span class="bold-title">rankUpDown:</span>${popularTV.rankUpDown}<br>
                <span class="bold-title">release-year:</span>${popularTV.year}<br>
            </p>
            <button id="Trailer" type="button">  Watch Trailer</button>
        </div>
    </div>`;
      });

      popularTVsDiv.innerHTML += content;

    });
}

getPopularTvShows();

const searchMovie = () => {
  const expression = document.getElementById("searchItem").value;

  fetch(`https://imdb-api.com/API/SearchMovie/k_6f75ijyi/${expression}`)
    .then((response) => response.json())
    .then((data) => {
      const contentsDiv = document.getElementById("contents");

      contentsDiv.innerHTML = "";

      const searchResults = data;

      var content = '';

      searchResults.results.slice(0, 12).map(searchResult => {
        content += `<div class="card">
          <img src="${searchResult.image}" alt="">
    <div class="descriptions">
              <h1><span class="bold-title">Result Type: ${searchResult.resultType}</span></h1>
              <p class="movie-text">

              <br><span class="bold-title">rank:</span> ${searchResult.rank}<br>
                  <span class="bold-title">title:</span> ${searchResult.title}<br>
                  <span class="bold-title">Description:</span> ${searchResult.description}<br>
                  <span class="bold-title">year:</span> ${searchResult.year}<br>
              </p>
              <button id="Trailer" type="button">  Watch Trailer</button>

          </div>
      </div>`;
      });

      contentsDiv.innerHTML += `<div>
          <div class="popularMovieTitle">
              <h1>Expression: ${typeof searchResults.expression === 'string' ? searchResults.expression : "No result found!"}</h1>
          </div>
          <div id="popularMovie" class="wrapper">${content}</div>
     </div>`;

    });
}

function Trailer(x) {
  // let x = wait
  // fetch(`https://imdb-api.com/API/YouTubeTrailer/k_6f75ijyi/${x}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //         const contentsDiv = document.getElementById("contents");

  //         contentsDiv.innerHTML = "";
  //         const searchResults = data;

  //         var content = "";
  //     });
  console.log("Thiis is my id " + x)
}