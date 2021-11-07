import React from 'react'
import {getVideosByChannel} from '../../redux/actions/channel.action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import VideoVertical from '../../components/videoVertical/VideoVertical'
 


const SubscriptionScreen = () => {

    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosByChannel());
    }, [dispatch])

    const {videos, loading} = useSelector(state => state.subscriptionsChannel)

    return (
        <div>
             <Container fluid>
            {
                !loading ? (
                    videos?.map(video=><VideoVertical video={video} key={video.id} subScreen/>)
                ) : <h1>Loading...</h1>
            }

        </Container>
        </div>
    )
}

export default SubscriptionScreen
