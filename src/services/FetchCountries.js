const Base_Url ="https://restcountries.com/v3.1";

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