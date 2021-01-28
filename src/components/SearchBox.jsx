import React from 'react'
import { makeStyles, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
        root: {
            width: 300
        },
    },
);

/** 
 * A search component with autocomplete options,
 *  Iv`e tried to make it global and reusable as possible (the options recived in the props, and also placholder and etc)
 * 
 * @param {String} placeholder - Text for the placeholder.
 * @param {Array} options - List of options for the autocomplete.
 */
const SearchBox = ({ placeholder, options, fetchOptions, onChange, loading}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let timeout = 0;

    /**
     * Fetching search options from the server base on input text from the user.
     * 
     * @param {string} searchText - The autocomplete text that will be sent to the backend and by that text will bring search options
     */
    const searchOption = (searchText) => {
      // Using timeout to reduce the number of requests (you dont want to do a request for each letter the user insert),
      // first checking if the user still typing by checking if there is already value to timout
      if (timeout) {
        clearTimeout(timeout);
      }
      if(searchText.trim() !== '') {
        timeout = setTimeout(() => {
          dispatch(fetchOptions(searchText));
        }, 1500);
      }
    }

    /**
     * Fetching results from the server based on the choosing option from the list.
     * 
     * @param {Event} event - The onclick js event.
     * @param {string} value - The value of the selected option from the list
     */
    const onOptionSelected = (event,value) => {
      // In case the user delete the search
      if (value) {
        dispatch(onChange(value.name));
      }
    }
  
    return (
        <Autocomplete
          className={classes.root}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          fullWidth
          getOptionSelected={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          onChange={onOptionSelected}
          options={options}
          loading={loading || (open && options.length === 0)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={placeholder || "Search"}
              onChange={(event) => searchOption(event.target.value)}
              variant="outlined"
              margin="normal"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
    );
}

export default SearchBox