import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Shows from '../components/Shows';
import {fetchShows, searchShows} from '../store/actions/home-actions';

/**
 * The home page of our fake netflix, show a list of shows and search box with autocomplete to search for a show.
 * 
 */
const Home = () => {
    const shows = useSelector((state) => state.HomeReducer.shows);
    const showsOptions = useSelector((state) => state.HomeReducer.showsOptions);
    const loadingShowsOptions = useSelector((state) => state.HomeReducer.loadingShowsOptions);

    return (
        <Container fixed>
            <Grid
                container
                spacing={2}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                        <SearchBox 
                            loading={loadingShowsOptions}
                            options={showsOptions}
                            placeholder={"Search for a show"}
                            onChange={fetchShows}
                            fetchOptions={searchShows}
                        />
                </Grid>
                <Grid item>
                    <Shows shows={shows}/>
                </Grid>
            </Grid>
        </Container>
      );
}

export default Home;
