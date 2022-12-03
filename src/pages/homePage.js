import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

const HomePage = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['discover', {id : pageNumber}], getMovies)

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <>
    <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => {
          return <AddToFavouritesIcon movie={movie} />
        }}
      />
      <Pagination
      page={page}
      count={data.total_pages}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
          
        />
      )}
    />
      </>
  );
};
export default HomePage;