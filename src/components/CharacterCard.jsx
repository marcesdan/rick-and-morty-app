import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';
import { Link } from '@reach/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    height: 220,
    display: 'flex',
    backgroundColor: '#3c3e44',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  content: {
    // flex: '1 0 auto',
  },
  image: {
    height: '100%',
    widht: '100%',
  },
  cover: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    // objectFit: 'contain',
  },
  white: {
    color: 'white',
    textDecoration: 'none',
  },
  secondary: {
    color: '#9e9e9e',
  },
}));

export const statusColor = (status) => {
  switch (status) {
    case 'Alive': return 'green';
    case 'Dead': return 'red';
    case 'Unknown': return 'gray';
    default: return 'gray';
  }
};

const CharacterCard = ({
  id, name, image, species, status, location, origin,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised>
      <div style={{ width: '40%', display: 'flex', flexDirection: 'row' }}>
        <Link to={`/characters/${id}`} className={classes.image}>
          <CardMedia
            image={image}
            title={name}
            alt={name}
            className={classes.cover}
            component="img"
          />
        </Link>
      </div>
      <div>
        <CardContent className={classes.content}>
          <Link to={`/characters/${id}`} className={classes.white}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
          </Link>
          <Typography variant="subtitle1" gutterBottom paragraph className={classes.white}>
            <Icon className="fas fa-circle" style={{ color: statusColor(status), fontSize: 11 }} />
            {` ${species} - ${status} `}
          </Typography>
          {location && location.name && (
            <>
              <Typography variant="subtitle1" color="textSecondary" className={classes.secondary}>
                Última ubicación conocida:
              </Typography>
              <Typography variant="subtitle2" className={classes.white} gutterBottom>
                {location.name}
              </Typography>
            </>
          )}
          {origin && origin.name && (
            <>
              <Typography variant="subtitle1" color="textSecondary" className={classes.secondary}>
                Origen:
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" className={classes.white}>
                {origin.name}
              </Typography>
            </>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  origin: PropTypes.objectOf(PropTypes.string).isRequired,

};

export default CharacterCard;
