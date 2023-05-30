import React from 'react';
import { Link } from 'wouter';

import HeaderStyle from './header.module.scss';

const Header = () => {
    return (<header className={HeaderStyle.bi_header}>
        <Link href='/'>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8" width="15" height="15" fill="#6F9B7A" />
                <rect x="8" width="15" height="15" fill="black" />
            </svg>
        </Link>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </header>)
}

export default Header;