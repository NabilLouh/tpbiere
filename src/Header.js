
import './App.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



export default function Header() {
  return (
    <div className="App">
      <Link to="/"><h1 className="Ttl">Beer-Factory!!</h1></Link>
      
      
    </div>
  );
}