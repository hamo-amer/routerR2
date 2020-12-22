import React from 'react'
import {Link} from 'react-router-dom'


function NavBar({isLogin,setIsLogin}) {
    
    return (
        <div className="nav-bar">
        
               <Link to='/'>
               <h3>Home</h3>
               </Link> 
               <Link to='/users'>
               <h3>List Users</h3>
               </Link>
             { isLogin ? <button onClick={()=>setIsLogin(!isLogin)}>Logout</button>:
              <button onClick={()=>setIsLogin(!isLogin)}>Login</button>
             }  
              
                 
                 
            </div>
    )
}

export default NavBar