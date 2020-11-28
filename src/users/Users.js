import React, {Component} from 'react' ;
import User from './User'

class Users extends Component {
render () {
    return (<div> <h2>Users</h2><h2/>
           <User age="22">Wahid</User>
            <User age="22">Vinay</User>
            <User age="22">Abhi</User>
    </div>)
    
}
}

export default Users;
