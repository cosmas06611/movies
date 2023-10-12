import React from 'react'
import MovieList from './Components/MovieList';


const movieArray =[
   {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Rating: 4,
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Rating: 3,
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Rating: 1,
      Year: "1998",
      imdbID: "tt0118661",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers: Earth's Mightiest Heroes",
      Rating: 5,
      Year: "2012",
      imdbID: "tt1626038",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      Title: "Ultimate Avengers: The Movie",
      Rating: 3,
      Year: "2006",
      imdbID: "tt0491703",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
    },
    {
      Title: "Ultimate Avengers II",
      Rating: 1,
      Year: "2006",
      imdbID: "tt0803093",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Rating: 2,
      Year: "1969",
      imdbID: "tt0054518",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      Title: "Avengers Assemble",
      Rating: 4,
      Year: "2019",
      imdbID: "tt2455546",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
    },
  
]

function App() {
  return (
    <div className="App">
      {}
    
       <MovieList movieArray ={movieArray} />
      
    
    </div>
  );
}

export default App;
