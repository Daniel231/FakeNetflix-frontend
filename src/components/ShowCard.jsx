import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import { favoriteShow } from '../store/actions/home-actions';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 500,
      width: 355
    },
    favoIcon: {
      color: "#fac517",
      padding: '5px',
    }
  });

/**
 * The component recevied a show with name and image and display it inside material card, and also display if the shown is favorite.
 * 
 * @param {Object} show - Object of show contain show name and image
 */

 const ShowCard = ({show}) => {
   const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={show?.image}
          title={show?.name}
          onClick={() => dispatch(favoriteShow(show.id))}
        >
            {show?.isFavorite && <FavoriteIcon className={classes.favoIcon} />}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {show?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ShowCard;