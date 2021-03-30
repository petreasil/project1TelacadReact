import React from 'react';
import styles from "../Useritem/Useritem.module.css";

function UserItem(props) {
    
    const {name, email, isGoldClient,image,salary,id,deleteItem} = props;
    console.log(id,deleteItem);
    return (
        <div className={styles.card}>
            <div className={styles.cardheader}>
            <img src={image} alt="image1" width="150" height="150"/>
            </div>
            <div className={styles.cardbody}>
                <h4>{ name }</h4>
                <p>{ email }</p>
                { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
                }
                <p>{salary}</p>
                <button onClick={deleteItem.bind(this,id)} className={styles.btn}>Sterge</button>
            </div>
        </div>
    );
}

export default UserItem;