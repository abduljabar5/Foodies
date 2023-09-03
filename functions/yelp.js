
exports.handler = async function(event, context) {
  // Check the method
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  const YELP_API_ENDPOINT = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=San+Francisco"; // Replace the query parameters as needed
  const YELP_API_KEY = "abUbJvWsXYsG6uRR2qsFxZXM7qaDcBbiUfVOSX6BvnhZPzzrFCDEPwUXf2bdNj0o1ANZ54s8JnGidKrr2pLOhMcUl-Gs4c0olSu_QMBc_ooXblRBIRy3B0-ZCSLzZHYx"; // Remember to secure this in a real environment

  try {
    const yelpResponse = await fetch(YELP_API_ENDPOINT, {
      headers: {
        'Authorization': `Bearer ${YELP_API_KEY}`,
      }
    });

    const data = await yelpResponse.json();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust this for production to your frontend's domain
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unable to fetch data from Yelp' })
    };
  }
};

