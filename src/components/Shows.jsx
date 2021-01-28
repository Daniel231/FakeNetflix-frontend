import React from 'react';
import { Grid } from '@material-ui/core';
import ShowCard from './ShowCard';

/**
 * The component recevied an array of shows and display the shows card.
 * 
 * @param {Array} shows - Array of shows to be displayed
 */
const Shows = ({shows}) => {
    return(
        <Grid container justify="center" spacing={2}>
            {shows.map(show => (
                <Grid item key={show.id}>
                    <ShowCard show={show} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Shows;