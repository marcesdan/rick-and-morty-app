import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { CircularProgress, Icon } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { CharactersSelectors } from 'stores/CharactersRedux';
import { statusColor } from 'components/CharacterCard';

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

const CharactersShow = ({ id }) => {
  const classes = useStyles();
  const characters = useSelector(CharactersSelectors.characters);
  if (!characters.length) return <CircularProgress />;
  const {
    name, image, species, status, location, origin,
  } = characters.find((it) => it.id === Number(id));
  return (
    <Card className={classes.root} raised>
      <div style={{ width: '40%', display: 'flex', flexDirection: 'row' }}>
        <CardMedia
          image={image}
          title={name}
          alt={name}
          className={classes.cover}
          component="img"
        />
      </div>
      <div>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
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

CharactersShow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CharactersShow;
