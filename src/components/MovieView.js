import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
    const {id} = useParams()
    console.log(id)

    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        console.log('make an api request', id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b57483b8b14ba0abe86259dd97b537b&language=en-US`)
            .then(response=>response.json())
            .then(data=>{
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..."/>
        }
        if(movieDetails){
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.posterPath}`
            return (
                <>
                    <Hero text={movieDetails.original_title} />
                    <div className="container my-5">
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded"/> {/*left col*/}
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">{movieDetails.overview}</p> {/*Right col*/}
                        </div>
                    </div>
                </>
            )
        }
    }

  return renderMovieDetails()
};

export default MovieView;
