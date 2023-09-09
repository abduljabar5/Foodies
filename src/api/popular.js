import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.post('/.netlify/functions/popular', {
      location: 'minneapolis'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
