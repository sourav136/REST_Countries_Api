import React, { useEffect, useState } from 'react';
import '../styles/Styles.css';
import { fetchCountriesByName, fetchCountriesBycode } from '../services/FetchCountries';
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCountry = async () => {
            try {
                const data = await fetchCountriesByName(name);
                if (data && data.length > 0){
                    setCountry(data[0]);
                    if (data[0].borders){
                        const borderNames = await Promise.all(
                            data[0].borders.map(async (code) =>{
                                const borderData = await fetchCountriesBycode(code);
                                return borderData ? borderData.name.common : null;
                            })
                        )
                        setBorderCountries(borderNames.filter(Boolean));
                    } else {
                        setBorderCountries([]);
                    }
                } else {
                    setCountry(null)
                }
            } catch (error) {
                console.error("Failed to load the country", error);
            } finally {
                setLoading(false);
            }
        };
        getCountry();
    }, [name]);

    if (loading) return <p>Loading...</p>;
    if (!country) return <p>Country not found</p>;

    return (
        <div className="country-detail">
            <div className="container">
                <button onClick={() => window.history.back()} className='back-button'>
                    ← Back
                </button>
                <div className="row justify-content-between">
                    <div className="col-lg-5 col-md-6 col-12 d-flex align-items-center">
                        <img src={country.flags.png} alt={`${country.name.common} flag`} className='country-detail-flag' />
                    </div>
                    <div className="col-md-6 col-12 d-flex align-items-center flex-column">
                        <h1 className='country-detail-h1'>{country.name.common}</h1>
                        <div className="country-other-details d-flex w-100">
                            <div className="col-6">
                                <p className='country-details-head'>
                                    Native Name: <span className='country-details'>
                                                    {country.name.nativeName
                                                    ? Object.values(country.name.nativeName)[0].common
                                                    : "N/A"}
                                                </span>
                                </p>
                                <p className='country-details-head'>Population: <span className='country-details'>{country.population}</span></p>
                                <p className='country-details-head'>Region: <span className='country-details'>{country.region}</span></p>
                                <p className='country-details-head'>Sub Region: <span className='country-details'>{country.subregion || "N/A"}</span></p>
                                <p className='country-details-head'>Capital: <span className='country-details'>{country.capital || "N/A"}</span></p>
                            </div>
                            <div className="col-6">
                                <p className='country-details-head'>
                                    Top Level Domain: <span className='country-details'>
                                                            {country.tld ? country.tld.join(", ") : "N/A"}
                                                        </span>
                                </p>
                                <p className='country-details-head'>
                                    Currencies: <span className='country-details'>
                                                    {country.currencies
                                                        ? Object.values(country.currencies).map(currency => currency.name).join(", ")
                                                        : "N/A"}
                                                </span>
                                </p>
                                <p className='country-details-head'>
                                    Languages: <span className='country-details'>
                                                    {country.languages 
                                                        ? Object.values(country.languages).join(", ") 
                                                        : "N/A"}
                                                </span>
                                </p>
                            </div>
                        </div>
                        {
                            borderCountries.length > 0 &&(
                                <div className="col-12">
                                    <p className='country-details-head'>Border Countries: {
                                    borderCountries.map((borderName, index) =>(
                                        <Link to={`/country/${borderName}`} key={index} className='border-country-link'>
                                            {borderName}    
                                        </Link>
                                    ))
                                    }</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;
