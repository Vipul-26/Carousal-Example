import React from 'react';
import './productList.css';
import { ReactComponent as RatingIcon } from '../../icons/rating.svg';
import { ReactComponent as FavoriteIcon } from '../../icons/favorite.svg';

const ProductList = ({ data }) => {

    const ratingValue = Math.max(1, Math.max(0, data.rating.rate));
    const width = Math.round(ratingValue * 16) || 0;

    return (
        <div className="mainClass">
            <a href="/">
                <img src={data.image} alt="product" className="image" />
                <span className='price'>
                    {`$${data.price}`}
                </span>
                <span className='title'>
                    {data.title}
                </span>
            </a>
            <div className='favDiv'>
                <FavoriteIcon className='favorite' />
            </div>
            <RatingIcon className='rating' />
            <svg class="ratingStar" height="15" width={width} viewBox={`0 0 ${width} 15`}>
                <desc></desc>
                <path d="M7.5 11.85l-4.4 2.28.8-4.88L.37 5.78l4.9-.74L7.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M39.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L39.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M23.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L23.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M55.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L55.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88M71.5 11.85l-4.4 2.28.8-4.88-3.53-3.47 4.9-.74L71.5.62l2.22 4.42 4.9.74-3.52 3.47.8 4.88"></path>
            </svg>
            <span className='ratingCount'>
                {data.rating.count}
            </span>
        </div>
    );
};

export default ProductList;
