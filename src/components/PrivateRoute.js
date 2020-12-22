import React from 'react'
import {Redirect,Route} from 'react-router-dom'

function PrivateRoute({component:Component,...rest}) {
  console.log(rest)
    return (
        <div>
           <Redirect to='/' />
           <Route component={Component} {...rest} />

         
        </div>
    )
}

export default PrivateRoute
