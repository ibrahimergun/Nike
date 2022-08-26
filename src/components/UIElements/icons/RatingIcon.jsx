import React from 'react';

function RatingIcon(props) {
  return (
    <svg
      width='48px'
      height='22px'
      viewBox='0 0 48 22'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        id='Page-1'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
        opacity='0.5'
      >
        <g id='Probejob-Hiemer' transform='translate(-255.000000, -778.000000)'>
          <g id='Group-10' transform='translate(160.000000, 778.000000)'>
            <g id='Group-8' transform='translate(95.000000, 0.000000)'>
              <text
                id='4,7'
                fontFamily='.AppleSystemUIFont'
                fontSize='14'
                fontWeight='normal'
                fill='#000000'
              >
                <tspan x='0' y='16'>
                  {props.averageRating}
                </tspan>
              </text>
              <g
                id='Icons-/-Star'
                transform='translate(26.000000, 0.000000)'
                stroke='#000000'
                strokeWidth='2'
              >
                <path
                  d='M11,2.25955146 L13.5687534,7.4644143 L19.3126605,8.29905286 L15.1563303,12.3504736 L16.1375067,18.0711714 L11,15.3702243 L5.86249325,18.0711714 L6.84366973,12.3504736 L2.68733946,8.29905286 L8.43124663,7.4644143 L11,2.25955146 Z'
                  id='Star-Copy'
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default RatingIcon;
