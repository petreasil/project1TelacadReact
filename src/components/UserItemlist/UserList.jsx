import React from 'react';
import UserItem from './Useritem/UserItem';
import  "../UserItemlist/UserList.css"

function UserList(props) {
    console.log(props);
    const { users } = props;

    return (
        <div className="list">

    
            <h2>Lista utilizatorilor:</h2>
         
            
        <dir className="row">
        
            { users.map((user, index) => {
                return <UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    isGoldClient={ user.isGoldClient }
                    image={user.image}
                    salary={user.salary}
                    deleteItem={props.deleteItem}
                    key={ index }
                />
            })}
            </dir>
        </div>
    );
}

export default UserList;