import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './_watchScreen.scss'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import VideoVertical from '../../components/videoVertical/VideoVertical'
import Comments from  '../../components/comments/Comments'

const WatchScreen = () => {
    return (
        <Row>
            <Col lg={8}>
                <div className='watchScreen_player'>
                    <iframe 
                        src='https://www.youtube.com/embed/tgbNymZ7vqY'
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
