import React from 'react';
import CharacterCard from 'components/CharacterCard';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';

const CharacterList = ({ data }) => (
  <Box my={5}>
    <Grid>
      <Grid item xs={12}>
        <Grid container spacing={3} justify="center">
          {data.map((item) => (
            <Grid key={item.id} item xl={4} lg={6}>
              <CharacterCard {...item} key={item.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;
