import Hero from "./Hero";

// tmdb api key =1b57483b8b14ba0abe86259dd97b537b
// example link = https://api.themoviedb.org/3/search/movie?api_key=1b57483b8b14ba0abe86259dd97b537b&language=en-US&query=star%20wars&page=1&include_adult=false

const SearchView = ({keyword, searchResults}) => {

    const title = `You are searching for ${keyword}`
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
