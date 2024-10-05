let key = c3dc5a79

function search(){
    let Movie = document.getElementById("searchbar").value

    const htmlrequest = new XMLHttpRequest()

    const link = "http://www.omdbapi.com/?apikey=c3dc5a79&t="
    +Movie
    htmlrequest.open("GET",link)
    htmlrequest.send()
    htmlrequest.responseType = "json"
    
    htmlrequest.onload = function(){
        console.log(htmlrequest.response)
        const content = document.getElementById("content")
        const imagetag = document.createElement("img")
        imagetag.src = htmlrequest.response.Poster
        while(content.firstChild){
            content.removeChild(content.firstChild)
        }
        content.appendChild(imagetag)

        const title = document.getElementById("title")
        title.innerHTML = htmlrequest.response.Title
         const year = document.getElementById("year")
        year.innerHTML = " ( " + htmlrequest.response.Year + " )"

        const genre = document.getElementById("genre")
        genre.innerHTML = "Genre: " + htmlrequest.response.Genre

        const plot = document.getElementById("plot")
        plot.innerHTML = "Plot: " + htmlrequest.response.Plot
       
        const imdb = document.getElementById("imdb")
        imdb.innerHTML = "IMDB: " + htmlrequest.response.imdbRating

        const actors = document.getElementById("actors")
        actors.innerHTML = "Actors: " + htmlrequest.response.Actors
    }
}