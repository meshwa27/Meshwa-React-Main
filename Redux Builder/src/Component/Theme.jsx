import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../styles/theme.css";
import { handleTheme } from '../Redux/action';

const Theme = () => {
    const theme = useSelector(state => state.theme.theme); // Access the theme inside the state
    const dispatch = useDispatch();

    return (
        <div className="theme-main">
            <button
                onClick={() => dispatch(handleTheme('light'))}
                disabled={theme === 'light'} // Disable when already light
            >
                Switch to Light
            </button>
            <button
                onClick={() => dispatch(handleTheme('dark'))}
                disabled={theme === 'dark'} // Disable when already dark
            >
                Switch to Dark
            </button>
        </div>
    );
};

export default Theme;
