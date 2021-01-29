import React, { memo } from 'react';
import {
  Box, Grid, Icon, MenuItem, TextField, Typography,
} from '@material-ui/core';
import DebouncedInput from 'components/DebouncedInput';
import PropTypes from 'prop-types';

const CharacterFilters = ({ filters: { name, status }, onChange }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };
  return (
    <Box mt={3}>
      <Typography variant="subtitle1" gutterBottom color="primary">
        Filtros de búsqueda
        {' '}
        <Icon className="fa fa-search" />
      </Typography>
      <Grid container>
        <Box mr={1}>
          <DebouncedInput
            onChange={onChange}
            type="search"
            id="name"
            label="Nombre del personaje"
            value={name}
            name="name"
            variant="filled"
          />
        </Box>
        <Box ml={1}>
          <TextField
            name="status"
            id="status"
            select
            label="Estado"
            value={status || ''}
            onChange={handleChange}
            variant="filled"
            style={{ minWidth: 150 }}
          >
            <MenuItem value="dead">Muerto</MenuItem>
            <MenuItem value="alive">Vivo</MenuItem>
          </TextField>
        </Box>
      </Grid>
    </Box>
  );
};

CharacterFilters.propTypes = {
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default memo(CharacterFilters);
