// import React, { useState } from 'react'
// import './style.css'
// import { links } from '../../assets/imagelinks'

// function Filter() {
//   const [selectedFilter,setSelectedFilter] = useState(null);

//   return (
//     <div className='filter-div'>
//       {links.map((item,i)=>(
//         <div key={i} 
//         className={`links-box ${i==selectedFilter && "selected-box"}`}
//         onClick= {() => {
//           console.log("selecting key", i);
//           setSelectedFilter(i);
//         }}>
//           <img src={item.imgSrc} className='links-img'/>
//           <p className={`links-label ${i==selectedFilter && "selected-label"}`}>
//             {item.label}</p>
//         </div>
//       ))}
      
//     </div>
//   )
// }

// export default Filter


import React, { useState } from 'react';
import './style.css';
import { links } from '../../assets/imagelinks';

function Filter({ onFilter }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div className='filter-div'>
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i === selectedFilter ? "selected-box" : ""}`}
          onClick={() => {
            setSelectedFilter(i);
            onFilter(item.label); // Pass the selected label to the filter function
          }}
        >
          <img src={item.imgSrc} className='links-img' />
          <p className={`links-label ${i === selectedFilter ? "selected-label" : ""}`}>
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
