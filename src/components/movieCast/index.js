import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getMovieCast, getSimilarMovies } from "../../api/tmdb-api";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieCast = ({movie}) => {
    const { data , error, isLoading, isError } = useQuery(
      ["moviecast", { id: movie.id }],
      getMovieCast
    );

    if (isLoading) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }
    
      const cast = data.cast;

return(
    <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Cast" sx={chip} color="primary" />
        </li>
        {cast.map((g) => (
          <li key={g.name}>
            <Link to={`/actor/${g.id}`}>
            <Chip label={g.name} sx={chip} />
            </Link>
          </li>
        ))}
      </Paper>
)
}

export default MovieCast;