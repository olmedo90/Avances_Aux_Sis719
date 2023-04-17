import React, { useEffect, useState } from "react";
import ItemMovie from "./ItemMovie";

const ListMovie = () => {
  const API_KEY = "9ed954fa225fb90f3888765849c9eb18";
  const URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=20`;

  const [movie, setMovie] = useState([]);
  console.log(movie);
  useEffect(() => {
    setTimeout(()=>{
        const getMovie = async () => {
            await fetch(URL_API)
              .then((res) => res.json())
              .then((data) => setMovie(data.results));
          };
          getMovie();
    },500)
    
  }, []);
  return (
    <div>
      <h1>my favorities movies</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eligendi rerum! Facere eaque magnam quasi, exercitationem laudantium, sapiente consequatur autem quia vero quae, dolores perspiciatis?</p>

      <div className="row container-fluid">
        {movie.map((item, index) => (
          <ItemMovie
            key={index}
            id={item.id}
            title={item.original_title}
            img={item.poster_path}
            descripcion={item.overview}
            votes={item.vote_count}
          />
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
