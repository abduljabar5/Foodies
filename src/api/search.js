import axios from 'axios';

export const Search = async (location, term) => {
  try {
    const response = await axios.post('/.netlify/functions/Search', {
        location: location,
        term: term
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};