import React from 'react'
import { Navigate } from 'react-router-dom';

const privatepage = ({children}) => {
  const token = localStorage.getItem('token');
  return token ? children :<Navigate to="/login"/>
}

export default privatepage
