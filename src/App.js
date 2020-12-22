import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import UsersList from './components/UsersList'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import './App.css'


function App() {
 const [isLogin, setIsLogin] = useState(false)
 
  return (
<div className="App">
<Router>
  <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
 
  <Route path='/users' render={()=><UsersList isLogin={isLogin} />} />
  <Route exact path='/' component={Home}/>
  <PrivateRoute path='/profile/:userId' render={(props)=><Profile {...props} isLogin={isLogin} />} />
  
  
  
  </Router>

  
 


</div>
  
  );
}

export default App;
