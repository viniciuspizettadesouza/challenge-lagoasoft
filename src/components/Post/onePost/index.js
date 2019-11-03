import React, { useState, useCallback, useEffect } from "react"

import "./Post.css"
import Button from './like-button'

const OnePost = ({ post }) => {

    const [buttonStatus, setButtonStatus] = useState(false)
    const [likes, setLikes] = useState(post.likes)
    const handleLikes = useCallback(() => { setButtonStatus(prevStatus => !prevStatus) }, [])

    useEffect(() => {
        if (buttonStatus === true) {
            setLikes(prevLikes => prevLikes + 1)
        } else if (post.likes !== likes && !buttonStatus) {
            setLikes(prevLikes => prevLikes - 1)
        }
    }, [buttonStatus, post.likes])

    return (
        <div className="container" key={post.id}>
            <div className="post-user">
                <div className="post-user-avatar">
                    <img src={post.avatar} alt={post.nickname} />
                </div>
                <div className="post-user-nickname">
                    <p>{post.nickname}</p>
                </div>
            </div>

            <div className="image">
                <img alt={post.caption} src={post.image} />
            </div>

            <div className="post-footer">
                <Button className="button" handleLikes={handleLikes} buttonStatus={buttonStatus} />
                <p className="post-caption">Curtido por <p className="post-likes">{likes}</p> pessoas</p>
            </div>

            <div className="post-description">
                <p className="post-user-nickname">{post.nickname}</p>
                <p className="post-caption">{post.caption}</p>
            </div>
            
            <div className="post-date">
                <p>{post.date}</p>
            </div>
        </div>
    )
}
export default React.memo(OnePost)