import React, {Component} from 'react' ;
import User from './User'

class Users extends Component {
    state = {
        users: [
            {name:"Henley", age:38},
            {name:"Clinton", age:25},
            {name:"Peter", age:45},
            {name:"Tom", age:33},
            {name:"Jerry", age:55},
            {name:"Paul", age:42},
            {name:"Xavier", age:40},

        ],

        title:"Users List"
    };

    makeMeYounger = () => {

        const newState = this.state.users.map((user) =>{
            const tempUser = user;
            tempUser.age -=10;
            return tempUser;
        });

        this.setState({
            newState
         });
    }   
    
    render() {
        return (<div>
            <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
            <h2>{this.state.title}</h2>
            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            <User age={this.state.users[3].age}>{this.state.users[3].name}</User>
            <User age={this.state.users[4].age}>{this.state.users[4].name}</User>
            <User age={this.state.users[5].age}>{this.state.users[5].name}</User>
            <User age={this.state.users[6].age}>{this.state.users[6].name}</User>
            </div>)
        
    }
}


export default Users;
