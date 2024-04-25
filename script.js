document.getElementById('searchButton').addEventListener('click', searchMovies)
let resultContainer = document.getElementById('results')

//  Función de búsqueda de películas

// La función `searchMovies` se ejecuta cuando se hace clic en el botón de búsqueda. Obtiene el valor ingresado en el campo de entrada de texto y realiza una solicitud a la API de TMDb para buscar películas que coincidan con el término de búsqueda.
let urlBase = 'https://api.themoviedb.org/3/search/movie'

let urlImg = 'https://image.tmdb.org/t/p/w200'
let api_key = 'ed072017c71569693591a5fbd977d4a0'

function searchMovies() {
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))
}
function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML= '<p>No se encontraron resultados para tu búsqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    })
}
