import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import InfoIcon from './icons/InfoIcon';
import RatingIcon from './icons/RatingIcon';
import TransportIcon from './icons/TransportIcon';

import './IconGroup.css';


function IconGroup({ averageRating }) {
  return (
    <div className='icon-container'>
      <button
        className='icon-button'
        onClick={() => {
          confirmAlert({
            title: 'Information button clicked',
            message:
              'You clicked on the info button. And the piece is currently under construction',
            buttons: [
              {
                label: 'Close',
              },
            ],
          });
        }}
      >
        <InfoIcon />
      </button>
      <button
        className='icon-button'
        onClick={() => {
          confirmAlert({
            title: 'Transport button clicked',
            message:
              'You clicked on the Transport button. And the piece is currently under construction',
            buttons: [
              {
                label: 'Close',
              },
            ],
          });
        }}
      >
        <TransportIcon />
      </button>
      <button
        className='icon-button'
        onClick={() => {
          confirmAlert({
            title: 'Feedback button clicked',
            message: `You clicked on the Feedback button. And the piece is currently under construction. But the average rating of this product  ${averageRating}`,
            buttons: [
              {
                label: 'Close',
              },
            ],
          });
        }}
      >
        <RatingIcon averageRating={averageRating} />
      </button>
    </div>
  );
}

export default IconGroup;
