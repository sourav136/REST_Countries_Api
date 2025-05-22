const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event) {
  const { path, queryStringParameters } = event;
  let apiUrl = 'https://restcountries.com/v3.1';

  // Determine which endpoint to call based on query params
  if (queryStringParameters.all !== undefined) {
    apiUrl += '/all';
  } else if (queryStringParameters.name) {
    apiUrl += `/name/${encodeURIComponent(queryStringParameters.name)}`;
  } else if (queryStringParameters.alpha) {
    apiUrl += `/alpha/${encodeURIComponent(queryStringParameters.alpha)}`;
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid query parameters' }),
    };
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data' }),
    };
  }
};