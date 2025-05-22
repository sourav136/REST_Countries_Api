 const NETLIFY_PROXY = "/.netlify/functions/countries-proxy";

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(`${NETLIFY_PROXY}?all`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to load countries", error);
    return [];
  }
};

export const fetchCountriesByName = async (name) => {
  try {
    const response = await fetch(`${NETLIFY_PROXY}?name=${encodeURIComponent(name)}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to load ${name}`, error);
    return null;
  }
};

export const fetchCountriesByCode = async (code) => {
  try {
    const response = await fetch(`${NETLIFY_PROXY}?alpha=${encodeURIComponent(code)}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Error fetching country by code", error);
    return null;
  }
};