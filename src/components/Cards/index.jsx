// import React from 'react'
// import './style.css'
// import Card from './card'
// import { list } from '../../assets/cards-list'

// function Cards() {
//   return (
//     <div className='cards-flex'>
//         {list.map((card,i)=> (
//             <Card card={card} key={i}/>
//         ))}
    
//     </div>
//   )
// }

// export default Cards

import React from 'react';
import './style.css';
import Card from './card';

function Cards({ list }) {
  return (
    <div className='cards-flex'>
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
