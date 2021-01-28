/**
 * The module is responisible for all the api requests to shows resource.
 * 
 */

import axios from 'axios'
import api from '../constant/api'

const baseUrl = api.api_base_url

export const getShowsNamesOptions = async (searchText) => {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/autocomplete?search=${searchText}`,
      headers: {
        'content-type': 'application/json',
      },
    })

    return response.data;
}

export const getShows = async (searchText) => {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}?search=${searchText}`,
      headers: {
        'content-type': 'application/json',
      },
    })

    return response.data;
}