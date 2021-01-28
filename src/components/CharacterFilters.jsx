import React from 'react';
import {
  Box,
  FormControl, Grid, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';

const CharacterFilters = ({ filters: { name, status }, onChange }) => (
  <Grid container>
    <Box m={2}>
      <TextField type="search" id="name" label="Nombre del personaje" defaultValue={name} onChange={onChange} name="name" />
    </Box>
    <Box m={2}>
      <FormControl style={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="status"
          name="status"
          value={status}
          defaultValue=""
          onChange={onChange}
        >
          <MenuItem value="dead">Muerto</MenuItem>
          <MenuItem value="alive">Vivo</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </Grid>
);

export default CharacterFilters;
