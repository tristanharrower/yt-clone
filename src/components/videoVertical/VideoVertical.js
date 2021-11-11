import React from 'react'
import './_videoVertical.scss'

import {AiFillEye} from 'react-icons/ai'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import { useEffect } from 'react';
import request from '../../api';
import { useHistory } from 'react-router';

const VideoVertical = ({ video, searchScreen, subScreen }) => {

    const {
        id,
        snippet: {
           channelId,
           channelTitle,
           description,
           title,
           publishedAt,
           resourceId,
           thumbnails: { medium },
        },
     } = video

     const [views, setViews] = useState(null)
     const [duration, setDuration] = useState(null)
     const [channelIcon, setChannelIcon] = useState(null)
     const isVideo = !(id.kind === 'youtube#channel' || subScreen)
     const _id = id.videoId || id


    useEffect(() => {

        const get_video_details = async () => {

            const {
                data:{ items },
            } = await request('/videos', {
                params:{
                    part:'contentDetails,statistics',
                    id:_id,
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
            
        }
        if (isVideo){
            get_video_details()
        }
        
    }, [_id, isVideo])

    useEffect(() => {

        const get_channel_icon = async () => {

            const {
                data:{ items },
            } = await request('/channels', {
                params:{
                    part:'snippet',
                    id:channelId,
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }

        get_channel_icon()

        return () => {
            setChannelIcon({});
          };
    }, [channelId])

    const thumbnail = !isVideo && 'videoHorizontal_thumbnail-channel'
    

    const _channelId = resourceId?.channelId || channelId

    const history = useHistory()
    const handleClick = () => {
        isVideo
        ? history.push(`/watch/${_id}`)
        : history.push(`/channel/${_channelId}`)
    }

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    return (
        <Row className="videoHorizontal m-1 p py-2 align-items-center" onClick={handleClick}>
            <Col xs={6} md={ searchScreen||subScreen ? 4 : 6}
            className="videoHorizontal_left"
            >
                 <LazyLoadImage src={medium.url}
                  effect='blur' 
                  className={`videoHorizontal_thumbnail ${thumbnail}`}
                  wrapperClassName="videoHorizontal_thumbnail-wrapper"
                  />
                  {
                      isVideo && (
                        <span className="videoHorizontal_duration">{_duration}</span>
                      )
                  }
                
            </Col>
            <Col xs={6} md={ searchScreen||subScreen ? 8 : 6}
            className="videoHorizontal_right p-0"
            >
                <p className="videoHorizontal-title mb-1">{title}</p>

                {
                    isVideo && (
                        <div className="videoHorizontal_details">
                            <AiFillEye/> {numeral(views).format('0.a')} Views • 
                            {moment(publishedAt).fromNow()}
                        </div>
                    )
                }
               

                {
                (searchScreen||subScreen) && <p className='mt-1 videoHorizontal_desc'> {description} </p>
                }

                <div className="videoHorizontal_channel d-flex align-items-center my-1">
                {isVideo && (
                <LazyLoadImage src={channelIcon?.url} effect='blur' />
                )}
                  <p className="mb-0">{channelTitle}</p>
                </div>
                {
                    subScreen &&
                    <p className="mt-2">
                        {
                            video.contentDetails.totalItemCount
                        } {' '}Videos
                    </p>
                }
            </Col>
        </Row>
    )
}

export default VideoVertical
