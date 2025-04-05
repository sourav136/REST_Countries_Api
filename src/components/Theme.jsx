import React, { useContext } from 'react';
import {ThemeContext} from '../context/ThemeContext'
import Moon from '../../public/moon-solid.svg'
import Sun from '../../public/sun-solid.svg'

const Theme = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className='theme'>
            <div className="container theme-container d-flex align-items-center justify-content-between h-100">
                <h1 className='theme-header'>Where in the world?</h1>
                <button onClick={toggleTheme} className='theme-button'>
                    <img src={theme === 'light' ? Moon : Sun} alt="Theme icon" className='theme-icon' />
                    {theme === 'light' ? 'Dark Mode'  : 'Light Mode'}
                </button>
            </div>
        </div>
    );
};

export default Theme;
