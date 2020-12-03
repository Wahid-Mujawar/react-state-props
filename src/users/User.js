import React from 'react';

const User = (props) => {
return (<div>
    Name: {props.children} Age: {props.age} Education :{props.education}</div>) 
    
}

export default User;