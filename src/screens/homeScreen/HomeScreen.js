import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'

import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component' 


const HomeScreen = () => {

   const dispatch = useDispatch();

   useEffect(() => {
        dispatch(getPopularVideos())
   }, [dispatch])

   const { videos } = useSelector(state=>state.homeVideos);


    return (
        <Container >
            <CategoriesBar/>
            <Row>
                    {videos.map((video) => (
                        <Col key={video.id} lg={3} md={4}>
                            <Video video={video} />
                        </Col>
                    ))}
            </Row>
        </Container>
    )
}

export default HomeScreen
