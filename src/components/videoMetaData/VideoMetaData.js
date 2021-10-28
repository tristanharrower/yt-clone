import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import {MdThumbUp,MdThumbDown} from 'react-icons/md'

const VideoMetaData = () => {
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData_top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(10000).format('0.a')} Views • 
                        {moment('2021-06-07').fromNow()}
                    </span>
                    <div>
                        <span className="like">
                            <MdThumbUp size={26}/>{numeral(10000).format('0.a')}
                        </span>
                        <span className="like">
                            <MdThumbDown size={26}/>{numeral(10000).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>
            <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                     alt=""
                     className="rounder-circle mr-3"
                     />
                     <div className="d-flex flex-column">
                        <span>ChannelName</span>
                        <span>{numeral(10000).format('0.a')} Subscribers</span>
                    </div>
                </div>
                <button className="btn border-0 p-2 m-2">Subscribe</button>
            </div>
            <div className="videoMetaData_description">
               jcdncjndjcndjc cjdncjdncjdc jdcndjcn jcdncjd  jdncdjc jcdncj jndcj cjdncjd jdncjn jdncjd jndcj jcdnc jncdj jndcjn


            </div>
        </div>
    )
}

export default VideoMetaData
