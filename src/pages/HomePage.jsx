import React, { useEffect, useState } from 'react';
import '../styles/Styles.css'
import {fetchAllCountries} from '../services/FetchCountries'
import CountryCard from '../components/CountryCard'

const Homepage = () => {

    const [countries, setCountries] = useState([]);

    useEffect( ()=>{
        const getCountries = async () =>{
            const data = await fetchAllCountries();
            setCountries(data);
        };

        getCountries();
    }, []);

    return (
        <div>
            <div className="homme-page">
                <div className="container">
                    <div className="row">
                        {
                        countries.map((country)=>(
                            <CountryCard key={country.cca3} country={country}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
