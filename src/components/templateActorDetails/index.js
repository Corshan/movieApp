import React from "react";
import Grid from "@mui/material/Grid";
import { CardMedia } from "@mui/material";
import Header from "../headerActor";

const TemplateActorPage = ({ actor, children }) => { 
    const img = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <>
      <Header actor={actor}></Header>
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
        <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;