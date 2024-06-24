// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import React from 'react'
// import './App.css'
// import Header from './components/Header'
// import Filter from './components/Filter'
// import Cards from './components/Cards'
// //import Home from './components/Home'


// function App() {
//   return (
//     <>
//       <div className='App'>
//         <Header/>
//         <Filter/>
//         <Cards/> 
//       </div>
      
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { list as initialList } from './assets/cards-list';

function App() {
  const [filteredList, setFilteredList] = useState(initialList);

  const handleFilter = (category) => {
    if (category === "Home") {
      setFilteredList(initialList); // Show all cards if "Home" is selected
    } else {
      const filtered = initialList.filter(item => item.category === category);
      setFilteredList(filtered);
    }
  };

  return (
    <div className='App'>
      <Header />
      <Filter onFilter={handleFilter} />
      <Cards list={filteredList} />
    </div>
  );
}

export default App;
