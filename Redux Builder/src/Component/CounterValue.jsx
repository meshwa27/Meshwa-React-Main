import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
    const counter = useSelector(state => state.counter.value);  // Access the 'value' field

    return (
        <div className="value">
            <h1>Counter: {counter}</h1>  {/* Correctly display the value */}
        </div>
    );
};

export default CounterValue;
