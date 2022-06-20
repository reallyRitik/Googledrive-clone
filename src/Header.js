import React from 'react'
import "./css/Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
function Header() {
    return (
    <div className='header'>
         <div className='header__logo'>
              <img src='https://logos-world.net/wp-content/uploads/2020/11/Google-Drive-Logo-700x394.png' alt=''></img>
              <span>Drive</span>
         </div> 

        <div className='header__search'>
           <SearchOutlinedIcon/>
           <input type="text" placeholder='Search in drive'/>
           <FormatListBulletedTwoToneIcon/>
        </div>

        <div className='header__icons'>
            <span>
                <HelpOutlineOutlinedIcon/>
                <SettingsOutlinedIcon/>
            </span>
            <span>
                <AppsOutlinedIcon/>
                <AccountCircleSharpIcon/>
            </span>
       </div>


    </div>
  )
}

export default Header