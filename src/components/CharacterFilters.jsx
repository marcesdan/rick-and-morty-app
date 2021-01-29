import React, { memo } from 'react';
import {
  Box, Grid, Icon, MenuItem, TextField, Typography,
} from '@material-ui/core';
import debounce from 'lodash/debounce';

const CharacterFilters = ({ filters: { name, status }, onChange }) => {
  const handleSearch = (e) => debounce(onChange(e), 2000);
  return (
    <>
      <Typography variant="subtitle1" gutterBottom color="primary">
        Filtros de búsqueda
        {' '}
        <Icon className="fa fa-search" />
      </Typography>
      <Grid container>
        <Box mr={1}>
          <TextField
            type="search"
            id="name"
            label="Nombre del personaje"
            defaultValue={name}
            onChange={handleSearch}
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
            onChange={onChange}
            variant="filled"
            style={{ minWidth: 150 }}
          >
            <MenuItem value="dead">Muerto</MenuItem>
            <MenuItem value="alive">Vivo</MenuItem>
          </TextField>
        </Box>
      </Grid>
    </>
  );
};

export default memo(CharacterFilters);
