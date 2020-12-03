import React, {Component} from 'react' ;
import User from './User'

class Users extends Component {
render () {
    return (<div> <h2> WEB DESIGN</h2>
        <h2>Users</h2><h2/>
        <User age="29" education="St Boscos">John</User>
        <User age="32" education="Chicago University">Tom</User>
        <User age="36" education="Education City">Jerry</User>

    </div>)
    
}
}

export default Users;
