import React from 'react'
import "./css/data.css"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
function Data() {
  return (
    <div className='data'>
       <div className='data__header'>
           <div className='data__headerLeft'>
              <p>My Drive</p>
              <ArrowDropDownOutlinedIcon/>
          </div>
           <div className='data__headerRight'>
               <ListOutlinedIcon/>
               <InfoOutlinedIcon/>
          </div>

       </div>

        <div className='data__contant'>
           <div className='data__grid'>
               <div className='data__file'>
                    <InsertDriveFileOutlinedIcon/>
                    <p>File Name</p>
               </div>
               <div className='data__file'>
                  <InsertDriveFileOutlinedIcon/>
                    <p>File Name</p>
               </div>
               <div className='data__file'>
                  <InsertDriveFileOutlinedIcon/>
                    <p>File Name</p>
               </div>
          </div>
           <div className='data__list'>
              <div className='detailsRow'>
                 <p><b>Name <ArrowDownwardOutlinedIcon/> </b></p>
                 <p><b>Owner</b></p>
                 <p><b>LastModified</b></p>
                 <p><b>File Size</b></p>
             </div>
             <div className='detailsRow'>
               <p>Name <InsertDriveFileOutlinedIcon/></p>
                    <p>me</p>
                    <p>Yesterday</p>
                     <p>1gb</p>
             </div>
          </div>
       </div>
    </div>
  )
}

export default Data