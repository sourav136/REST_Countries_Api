const CORS_PROXY = "https://corsproxy.io/?";
const API_BASE = "https://restcountries.com/v3.1";

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(`${CORS_PROXY}${API_BASE}/all`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to load countries", error);
    return [];
  }
};

export const fetchCountriesByName = async (name) => {
  try {
    const response = await fetch(`${CORS_PROXY}${API_BASE}/name/${name}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to load ${name}`, error);
    return null;
  }
};

export const fetchCountriesByCode = async (code) => {
  try {
    const response = await fetch(`${CORS_PROXY}${API_BASE}/alpha/${code}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching country by code", error);
    return null;
  }
};
