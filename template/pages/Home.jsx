import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return <p>Ceci est la page d'acceuil <Link to='/contact'>Contact</Link></p>
}

export default Home;