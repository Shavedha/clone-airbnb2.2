// import React from 'react'
// import './style.css'
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
// import LanguageIcon from '@mui/icons-material/Language';
// import BasicMenu from './ProfileMenu';
// import SimpleBottomNavigation from './BottomNav';
// import MobileSearchBar from '../MobileSearchBar';
// import logo from '../../assets/long-logo.png';

// function Header() {
//   return (
//     <div className='navbar'>
//         <img src={logo}  alt='logo' className='navbar-logo'/>
//         <div className='search-bar'>
//             <div className='search-bar-text'>Anywhere</div>
//             <div className='search-bar-text'>Anyweek</div>
//             <div className='search-bar-text2'>Any Guests</div>
//             <div className='search-icon-div'>
//                 <SearchRoundedIcon className='search-icon'/>
//             </div>
//         </div>
//         <div className='profile-container'>
//             <div className='airbnb-home'>Airbnb your Home</div>
//             <div className='globe'>
//                 <LanguageIcon sx = {{fontSize:"1.5rem"}}/>
//             </div>
//             <div className='profile-div'>
//                 <BasicMenu/>
//             </div>
            
//         </div>
//     <MobileSearchBar/>
//     <SimpleBottomNavigation/>
//     </div>
//   )
// }

// export default Header



import React, { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from '../MobileSearchBar';
import logo from '../../assets/long-logo.png';
import './style.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleSearchBarClick = () => {
    setExpanded(true);
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='navbar-logo'/>
      {!expanded ? (
        <div className='search-bar' onClick={handleSearchBarClick}>
          <div className='search-bar-text'>Anywhere</div>
          <div className='search-bar-text'>Anyweek</div>
          <div className='search-bar-text2'>Add Guests</div>
          <div className='search-icon-div'>
            <SearchRoundedIcon className='search-icon'/>
          </div>
        </div>
      ) : (
        <div className='expanded-search-bar'>
          <div className='search-item'>
            <label>Where</label>
            <input type="text" placeholder="Search destinations" />
          </div>
          <div className='search-item'>
            <label>Check in</label>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className='search-item'>
            <label>Check out</label>
            <input type="text" placeholder="Add dates" />
          </div>
          <div className='search-item'>
            <label>Who</label>
            <input type="text" placeholder="Add guests" />
          </div>
          <div className='search-icon-div'>
            <SearchRoundedIcon className='search-icon'/>
          </div>
        </div>
      )}
      <div className='profile-container'>
        <div className='airbnb-home'>Airbnb your Home</div>
        <div className='globe'>
          <LanguageIcon sx={{ fontSize: "1.5rem" }} />
        </div>
        <div className='profile-div'>
          <BasicMenu />
        </div>
      </div>
      <MobileSearchBar />
      <SimpleBottomNavigation />
    </div>
  );
}

export default Header;
