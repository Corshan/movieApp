import React from "react";
import { getTvShows} from "../api/tmdb-api";
import PageTemplate from '../components/templateTvShowList'
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const DiscoverTVShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discoverTvshows', getTvShows)


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  // Redundant, but necessary to avoid app crashing.
 // const favourites = tvShows.filter(m => m.favourite)
  //localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <PageTemplate
        title="Discover TV Shows"
        tvShows={tvShows}
      />
  );
};
export default DiscoverTVShowsPage;