        import React from 'react'

        const MovieList = ({ movieArray }) => {
            return (
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {movieArray.map((movie, i) => (
                <div key={i} style={{ width: "300px" }}>
                    <img src={movie.Poster} alt="movie" width="300px" height="500px" />
                    <p style={{ textAlign: "center" }}>
                    {movie.Title} - {movie.Year}
                    </p>
                </div>
                ))}
            </div>
            );
        };
        
        export default MovieList;
