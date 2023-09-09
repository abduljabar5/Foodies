const axios = require('axios');

exports.handler = async function(event, context) {
  // Ensure the method is POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  // Parse the request body
  const { location } = JSON.parse(event.body);

  // Encode the location to be URL-safe
  const encodedLocation = encodeURIComponent(location);

  const API_ENDPOINT = `https://api.yelp.com/v3/businesses/search?location=${encodedLocation}&rating=4,5&review_count<=100&categories=restaurants&limit=20&sort_by=best_match`;
  const YELP_API_KEY = "abUbJvWsXYsG6uRR2qsFxZXM7qaDcBbiUfVOSX6BvnhZPzzrFCDEPwUXf2bdNj0o1ANZ54s8JnGidKrr2pLOhMcUl-Gs4c0olSu_QMBc_ooXblRBIRy3B0-ZCSLzZHYx"; 

  try {
    const yelpResponse = await axios.get(API_ENDPOINT, {
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`,
      }
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust this for production to only allow your frontend's domain
      },
      body: JSON.stringify(yelpResponse.data)
    };
  }catch (error) {
    console.error("Error occurred:", error.response ? error.response.data : error.message); 
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Unable to fetch data from Yelp', 
        details: error.response ? error.response.data : error.message 
      })
    };
}

};
