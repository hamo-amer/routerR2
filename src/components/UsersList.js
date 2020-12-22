import React from 'react'
import {Redirect} from 'react-router-dom'
import {list} from '../const/Const'
import UserCard from './UserCard'
import {Container,Row} from 'reactstrap'

function UsersList({isLogin}) {
    return (
<>
{ !isLogin ? <Redirect to='/' />:
<Container>
    <Row>
{list.map((user,i)=><UserCard user={user}  key={i} />)}
    </Row>
</Container>

}

</>


    )
}

export default UsersList