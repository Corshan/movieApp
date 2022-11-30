import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getActorMovieCredits} from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import ActorTvCredits from "../actorTvCredits";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const TVShowDetails = ({ tvShow }) => {  // Don't miss this!
//     const { data , error, isLoading, isError } = useQuery(
//     ["movieCredits", { id: tvShow.id }],
//     getActorMovieCredits
//     );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }
//     const movieCredits = data;
    //console.log(data);

  return (
      <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvShow.overview}
              </Typography>
            
    </>
  );
};

export default TVShowDetails;