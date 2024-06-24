import React from 'react'
//import logo from '../../assests/imgs/long-logo.png'
import './style.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from '../MobileSearchBar';
import logo from '../../assets/long-logo.png';

function Header() {
  return (
    <div className='navbar'>
        <img src={logo}  alt='logo' className='navbar-logo'/>
        <div className='search-bar'>
            <div className='search-bar-text'>Anywhere</div>
            <div className='search-bar-text'>Anyweek</div>
            <div className='search-bar-text2'>Any Guests</div>
            <div className='search-icon-div'>
                <SearchRoundedIcon className='search-icon'/>
            </div>
        </div>
        <div className='profile-container'>
            <div className='airbnb-home'>Airbnb your Home</div>
            <div className='globe'>
                <LanguageIcon sx = {{fontSize:"1.5rem"}}/>
            </div>
            <div className='profile-div'>
                <BasicMenu/>
            </div>
            
        </div>
    <MobileSearchBar/>
    <SimpleBottomNavigation/>
    </div>
  )
}

export default Header