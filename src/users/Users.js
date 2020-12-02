import React, {Component} from 'react' ;
import User from './User'

class Users extends Component {
render () {
    return (<div> <h2> WEB DESIGN</h2>
        <h2>Users</h2><h2/>
        <User age="22">Wahid</User>
        <User age="22">Vinay</User>
        <User age="22">Abhi</User>
        <User age="29">John</User>
        <User age="32">Tom</User>
        <User age="36">Jerry</User>

    </div>)
    
}
}

export default Users;
