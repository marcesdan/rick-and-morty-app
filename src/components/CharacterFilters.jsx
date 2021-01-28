import React from 'react';
import {
  Box, Grid, Icon, MenuItem, TextField, Typography,
} from '@material-ui/core';

const CharacterFilters = ({ filters: { name, status }, onChange }) => (
  <>
    <Typography variant="subtitle1" variantMapping="subtitle1" gutterBottom={1} color="primary">
      Filtros de búsqueda
      {' '}
      <Icon class="fa fa-search" />
    </Typography>
    <Grid container>
      <Box mr={1}>
        <TextField type="search" id="name" label="Nombre del personaje" defaultValue={name} onChange={onChange} name="name" variant="filled" />
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

export default CharacterFilters;
