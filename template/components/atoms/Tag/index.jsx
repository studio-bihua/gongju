import React from 'react';

import TagStyle from './tag.module.scss';

const Tag = ({type, quantity}) => {
    return <div className={TagStyle.bi_tag}><p>{type}</p><p>{quantity}</p></div>
}

export default Tag;