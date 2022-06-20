import React, { useState } from 'react'
import "./css/sidebar.css"
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import ReactModal from 'react-modal';
import storage from './FirebaseSettings';
import { ref, uploadBytes } from "firebase/storage";

function Sidebar() {
    const[open, setOpen]= useState(false);
    const[uploding, setUploading]=useState(false);
    const[file , setFile]=useState(null)
    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>{
        setOpen(true);
    } 
    const handleChange=(e)=>{
        console.log('file', e.target.value)
        if(e.target.value)
        {
            setFile(e.target.value)
        }
    
    }

    const handleUpload=(event)=>{
        event.preventDefault();
        setUploading(true); 
        console.log('handleUpload', file)
        const storageRef = ref(storage, file);
        // storage.ref(`${file}`).put(file).than(snapshot=>{
        //     console.log(snapshot);
        // })
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }

    ReactModal.setAppElement('#root');
  return (
      <>
      <ReactModal isOpen={open} onClose={handleClose}>
        <div className='modal_pop'>
            <form>
                <div className='modalHeading'>
                    <h3>Select file you want to upload</h3>
                </div>
                <div className='modalBody'>
                    {
                        uploding ?(<p className='uploading'>Uploading</p>):(
                         <> 
                            <input type="file" className='file_name ' onChange={handleChange}/>
                            <input type="submit" className='post_submit' onClick={handleUpload}/>
                        </>
                      )
                    }
                    
                </div>
            </form>
        </div>
      </ReactModal>

    <div className='sidebar'>
       <div className='sidebar_btn'>
            <button onClick={handleOpen}>
                <img src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E' alt = ""></img>
                 <span>New</span>
           </button>
      </div>

     <div className='sidebar_options'>
         <div className='sidebar_option sidebar_option-Active'>
            <MobileScreenShareOutlinedIcon/>
             <span>My Drive</span>
         </div>
         <div className='sidebar_option'>
                <DevicesOutlinedIcon/>
                  <span>Computers</span>
         </div>
         <div className='sidebar_option'>
               <PeopleAltOutlinedIcon/>
               <span>Shared with me</span>
         </div>
         <div className='sidebar_option'>
                 <QueryBuilderOutlinedIcon/>
                <span>Recent</span>
         </div>
         <div className='sidebar_option'>
               <StarBorderOutlinedIcon/>
               <span>Starred</span>
         </div>
         <div className='sidebar_option'>
              <DeleteOutlineOutlinedIcon/>
              <span>Bin</span>
        </div>
    </div>
     <hr/>

     <div className="sidebar_options">
        <div className = "sidebar_option">
            <CloudQueueOutlinedIcon/>
              <span>Storage</span>
       </div>
   </div>

      <div className='progress_bar'>
         <progress size="tiny" value="50" max ="100"/>
            <span>6.54 GB of 15 GB</span>

      </div>
   </div>
    </>
  )
}

export default Sidebar