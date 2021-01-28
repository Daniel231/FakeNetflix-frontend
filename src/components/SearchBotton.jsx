import React from 'react'
import { makeStyles, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        height: 55,
        marginTop: 16,
        marginBottom: 8,
    },
});

const SearchButton = ({onClick}) => {
    const classes = useStyles();
    
    return (
        <Button 
            variant="outlined" 
            color="primary"
            size="large" 
            className={classes.root}
            startIcon={<SearchIcon />}
            onClick={onClick}
        >
            Search
        </Button>
    )
}

export default SearchButton