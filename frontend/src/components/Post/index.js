import React, { Component } from "react"

import "./Post.css"

import customData from "../../data/customData"

import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

class Post extends Component {

    render() {

        async function handleLike(likes) {
        }
        async function handleDislike(dislikes) {
        }

        return (
            <div>
                {customData.map(post => (

                    <div className="Post" ref="Post" key={post.id}>
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
                            <button className="button" type="button" onClick={() => handleLike(post.likes)}>
                                <img src={like} alt="Like" />
                            </button>
                            <button className="button" type="button" onClick={() => handleDislike(post.likes)}>
                                <img src={dislike} alt="Like" />
                            </button>
                            <p className="Post-caption">Curtido por <a className="Post-likes" href="/">{post.likes}</a> pessoas</p>
                        </div>
                        <div className="Post-description">
                            <p className="Post-user-nickname">{post.nickname}</p>
                            <p className="Post-caption">{post.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Post