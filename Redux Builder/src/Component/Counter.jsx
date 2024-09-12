import React from 'react';
import { useSelector } from 'react-redux';
import CounterButtons from './CounterButton';
import "../styles/counter.css";

const Counter = () => {
    const theme = useSelector(state => state.theme.theme); 

    return (
        <div className={`counter-main ${theme === 'dark' ? 'dark_theme' : 'light_theme'}`}>
            <CounterButtons />
        </div>
    );
};

export default Counter;
