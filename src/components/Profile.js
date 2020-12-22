import React from 'react'
import {Redirect,useParams} from 'react-router-dom'
import {Container,Jumbotron,Row} from 'reactstrap'
import {list} from '../const/Const'



function Profile(props) {
const {userId}=useParams()
  console.log(props)
    return (
    <>
{
 !props.isLogin  ? <Redirect to='/' />:
  <Container>
  <Jumbotron>
    <Row className="d-flex justify-content-center align-items-center">
      <p
        style={{
          width: "100px",
          height: "100px",
          fontSize: "1.5em"
        }}
        className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
      >

       {list.find(user=>user.id===Number(userId)).name[0]}
      </p>

      <h1 className="display-3 col">{list.find(user=>user.id===Number(userId)).name}</h1>

      <p className="lead text-center col">
       
      {list.find(user=>user.id===Number(userId)).address.street},{list.find(user=>user.id===Number(userId)).address.suite},{list.find(user=>user.id===Number(userId)).address.city}
           
      </p>
    </Row>
  </Jumbotron>
</Container> 
}

    </>
      
  )
}
export default Profile