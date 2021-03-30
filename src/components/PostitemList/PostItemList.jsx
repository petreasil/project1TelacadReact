import React from 'react'
import PostItem from "./PostItem/PostItem"
import styles from "./PostItemList.module.css";

export default function PostItemList(props) {
    

    const {posts } =props;
    return (
        <div className={styles.listContainer}>
            <h3>Lista Postari:</h3>
            {posts.map((post,index) =>{
                return (
                    <PostItem
                    key = {index}
                    id= {post.id}
                    title = {post.title}
                    body = {post.body}
                    />
                )
            })}
        </div>
    )
}
