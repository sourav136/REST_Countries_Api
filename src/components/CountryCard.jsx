import React from 'react';
import '../styles/CountryCard.css';

const CountryCard = ({ country }) => {
    return (
        <div className="col-md-4 col-lg-3 col-12 country-card d-flex flex-column mt-3">
            <img 
                className='country-card-image' 
                src={country.flags.png} 
                alt={`${country.name.common} flag`} 
            />
            <div className="country-text-container p-4">
                <p className='country-card-name'>{country.name.common}</p>
                <p className='country-card-details-head'>Population: <span className='country-card-details'>{country.population.toLocaleString()}</span></p>
                <p className='country-card-details-head'>Region: <span className='country-card-details'>{country.region}</span></p>
                <p className='country-card-details-head'>Capital: <span className='country-card-details'>{country.capital}</span></p>
            </div>
        </div>
    );
};

export default CountryCard;
