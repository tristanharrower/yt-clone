import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getVideosByChannel } from '../../redux/actions/videos.action'
import { useParams } from 'react-router'

const ChannelScreen = () => {

    const {channelId} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosByChannel(channelId));
    }, [dispatch, channelId])

    return (
        <div>
            Channel Screen
        </div>
    )
}

export default ChannelScreen
