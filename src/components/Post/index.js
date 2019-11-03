import React from "react"

import customData from "../../data/customData"

import OnePost from './onePost'

const Post = () => {

    return (
        <>
            {customData.map(post => (
                <OnePost post={post} key={post.id} />
            ))
            }
        </>
    )
}
export default Post