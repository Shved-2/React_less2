import React from 'react';
import ss from './Post.module.css'

const Post = (props) => {
  return (

    <div className={ss.item}>
      <img src="https://image.flaticon.com/icons/png/512/40/40098.png" />
      {props.message}
      <span>&hearts; {props.likeCount}</span>
    </div>

  )
}
export default Post;