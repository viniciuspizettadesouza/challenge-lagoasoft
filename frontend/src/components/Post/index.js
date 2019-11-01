import React, { useState } from "react"

import "./Post.css"

import customData from "../../data/customData"

import like from '../../assets/like.svg'

const Post = () => {

    const [likes, setLikes] = useState(0)

    function increment() {
        setLikes(likes => likes + 1);
    }

    return (
        <div>
            {customData.map(post => (
                <div className="Post" key={post.id}>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={post.avatar} alt={post.nickname} />
                        </div>
                        <div className="Post-user-nickname">
                            <p>{post.nickname}</p>
                        </div>
                    </div>
                    <div className="Post-image">
                        <div className="Post-image-bg">
                            <img alt={post.caption} src={post.image} />
                        </div>
                    </div>
                    <div className="post-footer">
                        <button className="button" type="button" onClick={increment}>
                            <img src={like} alt="Like" />
                        </button>
                        <button className="button" type="button" onClick={() => setLikes(likes => post.likes + 1)}>
                            <img src={like} alt="Like" />
                        </button>
                        <p className="Post-caption">Curtido por {likes}<a className="Post-likes" href="/">{post.likes}</a> pessoas</p>
                    </div>
                    <div className="Post-description">
                        <p className="Post-user-nickname">{post.nickname}</p>
                        <p className="Post-caption">{post.caption}</p>
                    </div>
                    <div className="Post-date">
                        <p>{post.date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Post