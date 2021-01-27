import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const CharacterCard = ({
  name, image, species, status, location, origin
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        image={image}
        title={name}
        alt={name}
        className={classes.cover}
        height="140"
        component="img"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${species} - ${status}`}
          </Typography>
          {location && location.name && (
            <>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Última ubicación conocida:
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                {location.name}
              </Typography>
            </>
          )}
          {origin && origin.name && (
            <>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                Origen
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph>
                {origin.name}
              </Typography>
            </>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

CharacterCard.propTypes = {};

export default CharacterCard;
