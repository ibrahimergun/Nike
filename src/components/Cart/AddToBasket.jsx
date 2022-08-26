import React, { useRef, useContext } from 'react';
import CartContext from '../../context/cartContext';

import './AddToBasket.css';
import Button from '../FormElements/Button';

function AddToBasket(props) {
  const { addItem } = useContext(CartContext);

  const { size, price } = props;

  const selectedSize = useRef();

  const addToBasketHandler = (e) => {
    e.preventDefault();
    addItem(price, selectedSize.current.value);
  };

  return (
    <form onSubmit={addToBasketHandler}>
      <div className='basket-container'>
        <div className='basket-group'>
          <div>
            <select className='size-selector' id='size' ref={selectedSize}>
              {size.map((allSize) => {
                return (
                  <option value={allSize} key={Math.random()}>
                    {allSize}
                  </option>
                );
              })}
            </select>
            <div className='line'></div>
          </div>
        </div>
        <div className='flex-row'>
          <Button
            type='submit'
            className='button'
            value='submit'
            onClick={props.onClick}
          >
            Add to basket
          </Button>
          <h1 className='price'>{price}</h1>
        </div>
      </div>
    </form>
  );
}

export default AddToBasket;
