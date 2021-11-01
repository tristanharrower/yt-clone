import request from '../../api'
import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../actionType";

export const getCommentsById = (id) => async dispatch => {
    try{
      dispatch({
         type:COMMENT_LIST_REQUEST
      })
       const {data}  =  await request('/commentThreads',{
          params:{
             part:'snippet',
             videoId:id
          }
       })
       console.log(data)
       dispatch({
          type:COMMENT_LIST_SUCCESS,
          payload:data.items,
       })
    }  catch(error){
         console.log(error.message);
         dispatch({
            type:COMMENT_LIST_FAIL,
            payload:error.response.data.message
         })
    }
 }