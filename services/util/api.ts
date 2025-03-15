const BASE_URL = 'https://dn17h5hhm6.execute-api.us-east-2.amazonaws.com';

const handleResponseStatus = (response: any) => {
  const { status } = response;

  if (status === 200 || status === 201) {
    console.log(`Response code: ${status}`);
    return true;
  }

  switch (status) {
    case 400:
      throw new Error('Bad request');
    case 401:
      throw new Error('Unauthorized');
    case 403:
      throw new Error('Forbidden');
    case 404:
      throw new Error('Endpoint does not exist');
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 505:
      throw new Error('Internal server error');
    default:
      console.warn(`Issue with request: ${response}`);
      return false;
  }
};

const url = (endpoint: string) => `${BASE_URL}/${endpoint}`;

const fetchData = async (endpoint: string, options: any, token: string | null) => {
  try {
    // Add the Authorization token to the headers if available
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}), // Only add Authorization if token exists
      ...options.headers, // In case there are other headers to merge
    };

    const response = await fetch(url(endpoint), {
      ...options,
      headers, // Pass the updated headers
    });

    if (!handleResponseStatus(response)) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.log(error);
  }
};

export { fetchData };