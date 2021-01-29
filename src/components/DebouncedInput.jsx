import React, {
  useState, useCallback, useEffect, memo,
} from 'react';
import { debounce } from 'lodash';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

function DebouncedInput({ onChange, value, ...rest }) {
  const [search, setSearch] = useState(value);
  function handleChange(filter) {
    onChange({ [rest.name]: filter });
  }
  const debounceLoadData = useCallback(debounce(handleChange, 1000), []);
  useEffect(() => {
    debounceLoadData(search);
  }, [search]);
  return (
    <TextField
      onChange={(event) => setSearch(event.target.value)}
      value={search}
      {...rest}
    />
  );
}

DebouncedInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

DebouncedInput.defaultProps = {
  value: '',
};

export default memo(DebouncedInput);
