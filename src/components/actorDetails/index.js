import React, {useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import { getActorMovieCredits} from "../../api/tmdb-api";
import { Link } from "react-router-dom";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const Actordetails = ({ actor }) => {  // Don't miss this!
  const { data , error, isLoading, isError } = useQuery(
    ["movieCredits", { id: actor.id }],
    getActorMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  //console.log(data)
    const movieCredits = data;

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
            <Chip label="Birthday" sx={chip} color="primary" />
        </li>
        <li>
            <Chip label={actor.birthday} sx={chip} />
              </li>
              <li style={{visibility: actor.deathday === null ? 'hidden' : 'visable'}}>
            <Chip label="Death" sx={chip} color="primary" />
        </li>
              <li style={{ visibility: actor.deathday === null ? 'hidden' : 'visable' }}>
            <Chip label={actor.deathday} sx={chip} />
                  </li>
      </Paper>
    <Paper component="ul" 
              sx={root}>
               <li>
            <Chip label="Also known as" sx={chip} color="primary" />
              </li>
              {(actor.also_known_as.map((g) => (
                  <li key={g}>
                  <Chip label={g} sx={chip} />
                </li>)
              ))}
          </Paper>
          <Paper component="ul" sx={root}>
          <Chip label="Movie Credits" sx={chip} color="primary" />
          {movieCredits.cast.map((c) => (
          <li key={c.title}>
            <Link to={`/movies/${c.id}`}>
            <Chip label={c.title} sx={chip} />
        </Link>
          </li>
        ))}
          </Paper>
    </>
  );
};

export default Actordetails;