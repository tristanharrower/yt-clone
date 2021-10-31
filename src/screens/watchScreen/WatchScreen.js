import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './_watchScreen.scss'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoVertical from '../../components/videoVertical/VideoVertical'
import Comments from  '../../components/comments/Comments'
import { useParams } from 'react-router'

const WatchScreen = () => {

    const {id} = useParams();

    return (
        <Row>
            <Col lg={8}>
                <div className='watchScreen_player'>
                    <iframe 
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder='0'
                        title='My video'
                        allowFullScreen
                        width='100%'
                        height='100%'></iframe>
                </div>
            <VideoMetaData/>
            <Comments/>


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
