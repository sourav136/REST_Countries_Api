import React, { useEffect, useState } from 'react';
import '../styles/Styles.css'
import {fetchAllCountries} from '../services/FetchCountries'
import CountryCard from '../components/CountryCard'
import SearchIcon from '../../public/magnifying-glass-solid.svg'
import Theme from '../components/Theme';

const HomePage = () => {

    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("All");

    useEffect( ()=>{
        const getCountries = async () =>{
            const data = await fetchAllCountries();
            setCountries(data);
        };

        getCountries();
    }, []);

    const filteredCountries = countries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    })

    return (
        <div>
            <Theme/>
            <div className="homme-page">
                <div className="container">
                    <div className="search-part w-100 d-flex flex-wrap justify-content-between">
                        <div className="col-lg-5 col-md-6 col-12 search-container d-flex">
                            <img src={SearchIcon} alt="Search icon" className='sarch-icon' />
                            <input 
                            id='search-country'
                            type="text"
                            placeholder='Search for a country...'
                            className='search-input'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} />
                        </div>

                        <div className="col-lg-3 col-md-4 col-7 select-container">
                            <select 
                            autoComplete='off'
                            name='region'
                            className='region-section'
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}>
                                <option className='region-option' value="All">All region</option>
                                <option className='region-option' value="Asia">Asia</option>
                                <option className='region-option' value="Africa">Africa</option>
                                <option className='region-option' value="Americas">Americas</option>
                                <option className='region-option' value="Europe">Europe</option>
                                <option className='region-option' value="Oceania">Oceania</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        {
                        filteredCountries.map((country)=>(
                            <CountryCard key={country.cca3} country={country}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
