const Base_Url ="https://corsproxy.io/?https://restcountries.com/v3.1";

export const fetchAllCountries= async () =>{
    try{
        const response = await fetch(`${Base_Url}/all`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error){
        console.error ("Failed to load countries", error);
        return [];
    }
}

export const fetchCountriesByName = async (name) => {
    try{
        const response = await fetch(`${Base_Url}/name/${name}`);
        if(!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Failed tto load ${name}`, error);
        return null;
    }
}

export const fetchCountriesBycode = async (code) =>{
    try{
        const response = await fetch(`${Base_Url}/alpha/${code}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        return data[0];
    } catch (error){
        console.error("Error fetching country by code", error);
        return null
    }
}