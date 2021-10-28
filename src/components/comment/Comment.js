import React from 'react'
import moment from 'moment'
import  './_comment.scss'

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                 alt=""
                 className="rounded-cirlce mr-3"
            />
            <div className="comment_body">
                <p className="comment_header">
                tristan harrower • {moment('2021-06-07').fromNow()}
                </p>
                <p>
                    Comments go here
                </p>
            </div>
        </div>
    )
}

export default Comment
