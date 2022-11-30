import React from "react";
import TVShowHeader from "../headerTvshow";
import Grid from "@mui/material/Grid";
import { getMovieImages, getTvShowImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Slideshow from "../slideShow";

const TemplateTVShowPage = ({ tvShow, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["tvshowImages", { id: tvShow.id }],
    getTvShowImages
  );
 

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
    const images = data.posters
    console.log(data);

  return (
    <>
     <TVShowHeader tvShow={tvShow}></TVShowHeader>

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <Slideshow images={images}/>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTVShowPage;