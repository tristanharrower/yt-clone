import React from 'react'
import './_video.scss'

import {AiFillEye} from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video_top">
                <img src="https://i.ytimg.com/vi/c2AOOroKI_A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFPi8p3IUCCOudwEp-KCQd9uHBnA" alt=""/>
                <span>05:43</span>
            </div>
            <div className="video_title">
            Create app made by me
            </div>
            <div className="video_details">
                <span>
                    <AiFillEye/> 5m views •
                </span>
                <span>5 days ago</span>
            </div>
            <div className="video_channel">
                <img src='https://yt3.ggpht.com/ytc/AKedOLSLbc3ey7WMz-tiU22IWZMG3lfokOMAhIgEE2fl=s68-c-k-c0x00ffffff-no-rj' alt='' />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
