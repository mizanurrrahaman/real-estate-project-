import React from 'react'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import "./profilepage.scss";

const ProfilePage = () => {
  return (
    <div className='profilepage'>
       <div className='details'>
          <div className='wrapper'> 
            <div className='title'>
              <h1> User Infortmation</h1>
              <button>Update Profile </button>
            </div>
            <div className='info'>
              <span> 
                 Avater:
                 <img src="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg" alt="" />
              </span>
               <span> Username: <b> John Doe</b></span>
               <span>E-mali :<b>john@gmail.com</b></span>
            </div>
             <div className='title'> 
                <h1>My List </h1>
                <button>Create New Post </button>
             </div>
             <List/>
                <div className='title'> 
                   <h1>Save List </h1>
                </div>
             <List/>
          </div>
       </div>
        <div className='chatContainer'>
          <div className='wrapper'>
             <Chat/>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage