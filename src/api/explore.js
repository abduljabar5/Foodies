import axios from 'axios';

export const fetchData2 = async () => {
  try {
    const response = await axios.post('/.netlify/functions/Explore', {
      location: 'minneapolis'
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
