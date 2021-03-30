import React from 'react'
import styles from "./PostItem.module.css";

export default function PostItem(props) {
    const {id,title,body} = props;
    return (
        <div className={styles.blogpost}>
            <h3>Post id: {id}</h3>
            <p className={styles.blogpostitle}>Post Title: {title}</p>
            <p>{body}</p>
        </div>
    )
}
