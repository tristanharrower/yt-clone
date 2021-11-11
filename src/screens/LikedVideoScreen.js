import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getLikedVideos } from '../redux/actions/videos.action'
import { useDispatch } from 'react-redux'
import VideoVertical from '../components/videoVertical/VideoVertical'

const LikedVideoScreen = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getLikedVideos())
    },[dispatch])

    const {videos, loading} = useSelector(state=>state.likedVideos)

    return (
        <div>
            {
                videos.map(video=><VideoVertical video={video} key={video.id} searchScreen/>)
            }
        </div>
    )
}

export default LikedVideoScreen
