import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getVideosBySearch } from '../redux/actions/videos.action'
import  VideoVertical  from '../components/videoVertical/VideoVertical'

const SearchScreen = () => {

    const {query} = useParams()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getVideosBySearch(query));
    }, [query, dispatch])

    const { videos, loading } = useSelector(state=>state.searchedVideos)

    return (
        <Container>
            {
                !loading ? (
                    videos?.map(video=><VideoVertical video={video} key={video.id.videoId} searchScreen/>)
                ) : <h1>Loading...</h1>
            }

        </Container>
    )
}

export default SearchScreen
