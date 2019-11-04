import React, { useState, useCallback, useEffect } from "react"

import LikeButton from './like-button'

import "./post.css"

const OnePost = ({ post }) => {

    const [buttonStatus, setButtonStatus] = useState(false)
    const [likes, setLikes] = useState(post.likes)

    const handleLikes = useCallback(() => { setButtonStatus(prevStatus => !prevStatus) }, [])

    useEffect(() => {
        if (buttonStatus) {
            setLikes(post.likes + 1)
        } else if (post.likes !== likes && !buttonStatus) {
            setLikes(prevStatus => prevStatus - 1)
        }
    }, [buttonStatus, likes, post.likes])

    return (
        <div className="container" key={post.id}>
            <div className="header">
                <div className="user-avatar">
                    <img src={post.avatar} alt={post.nickname} />
                </div>
                <div className="user-nickname">
                    <p>{post.nickname}</p>
                </div>
            </div>

            <div className="image">
                <img alt={post.caption} src={post.image} />
            </div>

            <div className="description">
                <LikeButton className="button" handleLikes={handleLikes} buttonStatus={buttonStatus} />
                <p>Curtido por</p>
                <p className="likes">{likes}</p>
                <p>pessoas</p>
            </div>

            <div className="description">
                <p className="user-nickname">{post.nickname}</p>
                <p className="caption">{post.caption}</p>
            </div>

            <div className="date">
                <p>{post.date}</p>
            </div>
        </div>
    )
}
export default React.memo(OnePost)