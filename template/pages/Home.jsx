import React from 'react';

import HomeStyle from './home.module.scss';
import Card from '../components/organisms/Card';

const Home = () => {
    return (
        <>
        <section className={HomeStyle.bi_hero}>
            <h1>Gongju</h1>
            <p>Utility Library</p>
        </section>
        <section className={HomeStyle.bi_articles}>
            <ul>
                <li><Card type="JS" quantity="15 functions"/></li>
                <li><Card type="Hooks" quantity="6 functions"/></li>
                <li><Card type="SCSS" quantity="5 fichiers"/></li>
            </ul>
        </section>
        </>
    )
}

export default Home;