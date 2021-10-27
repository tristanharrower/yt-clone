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

   const { videos, activeCategory } = useSelector(state=>state.homeVideos);

   const fetchData = () => {
    if (activeCategory === 'All') dispatch(getPopularVideos())
    else {
       dispatch(getVideosByCategory(activeCategory))
    }
 }


    return (
        <Container >
            <CategoriesBar/>
            <Row>
            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
                    {videos.map((video) => (
                        <Col key={video.id} lg={3} md={4}>
                            <Video video={video} />
                        </Col>
                    ))}
            </InfiniteScroll>
            </Row>
        </Container>
    )
}

export default HomeScreen
