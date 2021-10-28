import React from 'react'
import './_videoVertical.scss'

import {AiFillEye} from 'react-icons/ai'
import request from '../../api'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'

const VideoVertical = () => {
    const seconds = moment.duration('100').asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    return (
        <Row className="videoHorizontal m-1 p py-2 align-items-center">
            <Col xs={6} md={4}
            className="videoHorizontal_left"
            >
                 <LazyLoadImage src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                  effect='blur' 
                  className="videoHorizontal_thumbnail"
                  wrapperClassName="videoHorizontal_thumbnail-wrapper"
                  />
                <span className="video_top_duration">{_duration}</span>
            </Col>
            <Col xs={6} md={8}
            className="videoHorizontal_right p-0"
            >
                <p className="videoHorizontal-title mb-1">
                        catchy title
                </p>
                <div className="videoHorizontal_details">
                    <AiFillEye/> {numeral(4300).format('0.a')} Views • 
                    {moment('2021-08-07').fromNow()}
                </div>
                <div className="videoHorizontal_channel d-flex align-items-center my-1">
                {/*<LazyLoadImage src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                  effect='blur' 
                  />*/}
                  <p>ChannelName</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoVertical
