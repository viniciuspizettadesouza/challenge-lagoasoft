import React, { Component } from "react"

import "./Post.css"

import customData from "../../data/customData"

import like from '../../assets/like.svg'

class Post extends Component {

    render() {

        async function handleLike(id) {

        }

        return <div>

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
                    <div className="buttons">
                        <button className="button" type="button" onClick={() => handleLike(post._id)}>
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                    <div className="Post-description">
                        <p className="Post-user-nickname">{post.nickname}</p>
                        <p className="Post-caption">{post.caption}</p>
                    </div>


                </div>
            ))}
        </div>
    }
}
export default Post