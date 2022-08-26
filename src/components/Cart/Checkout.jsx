import React, { useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

//import { NavLink } from 'react-router-dom';
import Card from '../UIElements/Card';
import { BiCart } from 'react-icons/bi';
import CartContext from '../../context/cartContext';

import './Checkout.css';

function Checkout() {
  const cartContext = useContext(CartContext);

  const cartHandler = () => {
    console.log(cartContext.items.map(item => item));
    confirmAlert({
      title: 'Checkout button clicked',
      message:
        `You clicked on the Checkout button. And the piece is currently under construction. But there are currently ${cartContext.totalItems} items in your cart`,
      buttons: [
        {
          label: 'Close',
        },
      ],
    });
  };

  return (
    <Card>
      <span>
        <span className='cart-badge'>{cartContext.totalItems}</span>
        <button onClick={cartHandler} className='cart-button'>
          <BiCart className='icon-cart' />
        </button>
      </span>
    </Card>
  );
}

export default Checkout;
