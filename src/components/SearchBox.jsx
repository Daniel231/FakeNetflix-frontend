import React, {useEffect} from 'react'
import { makeStyles, TextField, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchButton from './SearchBotton';

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
    const [searchText, setSearchText] = React.useState('');

    /**
     * Fetching search options from the server base on input text from the user.
     * 
     */
    useEffect(() => {
      if(searchText.trim() !== '') {
        const timeout = setTimeout(() => {
          dispatch(fetchOptions(searchText));
        }, 300)
        
        return () => {
          clearTimeout(timeout);
        };
      }
        
    }, [searchText, dispatch, fetchOptions])

    /**
     * Fetching results from the server based on the choosing option from the list.
     * 
     * @param {Event} event - The onclick js event.
     * @param {string} value - The value of the selected option from the list
     */
    const onOptionSelected = (event, value) => {
      // In case the user delete the search
      dispatch(onChange(value?.name));
    }
    
    const onSearchButtonClicked = () => {
      dispatch(onChange(searchText))
    }
  
    return (
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item>
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
          clearOnBlur={false}
          loading={loading || (open && options.length === 0)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label={placeholder || "Search"}
              onChange={(event) => setSearchText(event.target.value)}
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
        </Grid>
        <Grid item>
          <SearchButton onClick={onSearchButtonClicked} />
        </Grid>
      </Grid>
    );
}

export default SearchBox