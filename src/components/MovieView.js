import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
    const {id} = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    useEffect(()=>{
        console.log('make an api request', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b57483b8b14ba0abe86259dd97b537b&language=en-US`)
            .then(response=>response.json())
            .then(data=>{
                setMovieDetails(data)
            })
    }, [id])

  return (
    <>
      <Hero text={movieDetails.original_title} />
    </>
  );
};

export default MovieView;
