// CounterButtons.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import CounterValue from './CounterValue';
import { handleAdd, handleReduce } from '../Redux/action';

const CounterButtons = () => {
    const dispatch = useDispatch();

    return (
       <div>
         <CounterValue />
         <div className="main-button">
           
            <button onClick={() => dispatch(handleAdd())}>ADD</button>
            <button onClick={() => dispatch(handleReduce())}>REDUCE</button>
        </div>
       </div>
    );
};

export default CounterButtons;
