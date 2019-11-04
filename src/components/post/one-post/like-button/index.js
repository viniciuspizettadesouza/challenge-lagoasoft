import React from "react"
import classnames from 'classnames'
import ReactSVG from 'react-svg'

import like from '../../../../assets/thumb.svg'
import "./post.css"

const LikeButton = ({ handleLikes, buttonStatus }) => {

    return (
        <button onClick={handleLikes}>
            <ReactSVG className={classnames({ ["liked"]: buttonStatus }, "standard")} src={like} />
        </button>
    )
}
export default React.memo(LikeButton)