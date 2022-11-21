import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from "@mui/material/CardHeader";
import img from '../../images/film-poster-placeholder.png';
import CardActions from "@mui/material/CardActions";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import Grid from "@mui/material/Grid";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function TVShowCard  (tvShow) {
    return(
        <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {tvShow.tvShow.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          tvShow.tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
            <CalendarIcon fontSize="small" />
              {tvShow.tvShow.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.tvShow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      <Link to={``}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
    )
};