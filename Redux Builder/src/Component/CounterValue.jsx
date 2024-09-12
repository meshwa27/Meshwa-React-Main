import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
    const counter = useSelector(state => state.counter.value);

    return (
        <div className="value">
            <h1>Counter: {counter}</h1> 
        </div>
    );
};

export default CounterValue;
