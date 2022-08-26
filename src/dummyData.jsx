import imageTop from './images/shoes_top.png';
import imageBottom from './images/shoes_bottom.png';

const dummyData = [
  {
    header: 'Feel strong like Lebron',
    textBegin: [
      'The LeBron 17 LMTD features a large ',
      <strong key={Math.random()}>Max Air</strong>,
      ' unit in the heel and Zoom Air cushioning for extra ',
      <strong key={Math.random()}> comfort.</strong>,
    ],
    textLast: [
      'Knit material wraps your feet for ',
      <strong key={Math.random()}>lightweight</strong>,
      'support so you can make quick, powerful moves like a champ.',
    ],
    imageTop: imageTop,
    imageBottom: imageBottom,
    rating: '4,7',
    size: ['EU 43', 'EU 42', 'EU 41', 'EU 40' , 'EU 37'],
    price: '$249',
  },
  {
    header: 'Lorem ipsum dolor sit amet',
    textBegin: [
      'Est ratione minus et perferendis aliquid qui ',
      <strong key={Math.random()}>Max Air</strong>,
      ' Ut sapiente nulla sed rerum tenetur vel ipsa blanditiis et ',
      <strong key={Math.random()}> comfort.</strong>,
    ],
    textLast: [
      'Knit material wraps your feet for ',
      <strong key={Math.random()}>lightweight</strong>,
      'Id inventore fugit et sunt fugit et omnis illo sit placeat voluptatem.',
    ],
    imageTop: imageTop,
    imageBottom: imageBottom,
    rating: '8,6',
    size: ['EU 53', 'EU 17', 'EU 24', 'EU 8' , 'EU 23'],
    price: '$50',
  }, 
];

export default dummyData;
