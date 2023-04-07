import React from 'react';
import { Link } from 'react-router-dom';
const Heder = () => {
    return (
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/orderreview'>Order Review</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
     </nav>
    );
};

export default Heder;