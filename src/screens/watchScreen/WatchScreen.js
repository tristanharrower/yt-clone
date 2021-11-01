import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './_watchScreen.scss'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoVertical from '../../components/videoVertical/VideoVertical'
import Comments from  '../../components/comments/Comments'
import { useParams } from 'react-router'
import { getVideoById } from '../../redux/actions/videos.action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const WatchScreen = () => {

    const {id} = useParams();

  const dispatch = useDispatch();

 useEffect(()   => {
    dispatch(getVideoById(id))
 }, [dispatch,id])

 const {video, loading} = useSelector(state => state.selectedVideo)

    return (
        <Row>
            <Col lg={8}>
                <div className='watchScreen_player'>
                    <iframe 
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title={video?.snippet?.title}
                        allowFullScreen
                        width='100%'
                        height='100%'></iframe>
                </div>
                {
                    !loading  ?  <VideoMetaData  video={video} videoId={id}/> :  <h6>Loading...</h6>
                }
            
            <Comments videoId={id} 
            totalComments={video?.statistics?.commentCount}
            />


            </Col>
            <Col lg={4}>
                {
                    [...Array(10)].map(()=><VideoVertical/>)
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
