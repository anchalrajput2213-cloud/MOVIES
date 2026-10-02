let movie = document.getElementById("Movies");
let button = document.getElementById("btn");
let result = document.getElementById("container");
button.addEventListener("click", function () {
    let name = movie.value;
    fetch("https://www.omdbapi.com/?apikey=ce1d37c8&s=" + name)
        .then(function (res) {
            return res.json();
        })
        .then(function (movies) {
            console.log(movies);
            result.innerHTML = "";
            movies.Search.forEach(function (item) {
                let card = `
                    <div class="card">
                        <img src="${item.Poster}">
                        <h2>${item.Title}</h2>
                        <p>Year : ${item.Year}</p>
                        <p>Type : ${item.Type}</p>
                        <p>IMDb ID : ${item.imdbID}</p>
                    </div>
                `;
                result.innerHTML += card;
            });
        });
});