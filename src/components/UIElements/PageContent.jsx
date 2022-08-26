import React from 'react';

import './PageContent.css';
import IconGroup from './IconGroup';
import AddToBasket from '../Cart/AddToBasket';

function PageContent({ defaultProps }) {
  return (
    <div >
      <div>
        <div>
          <img className='image-top' alt='top' src={defaultProps.imageTop} />
          <div className='container'>
            <h1 className='headerText'>{defaultProps.header}</h1>
            <p className='informationText'>
              {defaultProps.textBegin}
              <br />
              <br />
              {defaultProps.textLast}
            </p>
          </div>
        </div>
        <img
          className='image-bottom'
          alt='bottom'
          src={defaultProps.imageBottom}
        />
      </div>
      <div>
        <IconGroup averageRating={defaultProps.rating} />
        <AddToBasket
          size={defaultProps.size}
          src={defaultProps.src}
          onClick={defaultProps.onClick}
          price={defaultProps.price}
        />
      </div>
    </div>
  );
}

export default PageContent;
