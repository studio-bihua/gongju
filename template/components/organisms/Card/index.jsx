import React from 'react'
import Tag from '../../atoms/Tag'

import CardStyle from './card.module.scss';

const Card = ({picture, type, quantity}) => {
    return <article className={CardStyle.bi_card}>
        <picture>
            <img src="https://source.unsplash.com/random/330×330/?plant" alt="" />
        </picture>
        <Tag type={type} quantity={quantity}/>
    </article>
}

export default Card;