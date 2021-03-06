import  request from '../../api'
import { CHANNEL_DETAILS_FAIL,
    CHANNEL_DETAILS_REQUEST,
     CHANNEL_DETAILS_SUCCESS,
      SET_SUBSCRIPTION_STATUS,
   SUBSCRIPTIONS_CHANNEL_FAIL,
   SUBSCRIPTIONS_CHANNEL_REQUEST,
   SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionType";

export const getChannelDetails = (id) => async dispatch => {
    try{
      dispatch({
         type:CHANNEL_DETAILS_REQUEST
      })
       const {data}  =  await request('/channels',{
          params:{
             part:'snippet,statistics,contentDetails',
             id
          }
       })
       dispatch({
          type:CHANNEL_DETAILS_SUCCESS,
          payload:data.items[0]
       })
    }  catch(error){
         console.log(error.message);
         dispatch({
            type:CHANNEL_DETAILS_FAIL,
            payload:error.response.message
         })
    }
 }

 export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
   try{

      const {data}  =  await request('/subscriptions',{
         params:{
            part:'snippet',
            forChannelId: id,
            mine:true
         },
         headers:{
            Authorization:`Bearer ${getState().auth.accessToken}`
         }
      })
      dispatch({
         type:SET_SUBSCRIPTION_STATUS,
         payload:data.items.length !== 0
      })
      
   }  catch(error){
        console.log(error.response.data);
   }
}

export const getSubscribedChannels = () => async (dispatch, getState) => {
   try{
      dispatch({
         type:SUBSCRIPTIONS_CHANNEL_REQUEST
      })

      const {data}  =  await request('/subscriptions',{
         params:{
            part:'snippet, contentDetails',
            mine:true
         },
         headers:{
            Authorization:`Bearer ${getState().auth.accessToken}`
         }
      })
      dispatch({
         type:SUBSCRIPTIONS_CHANNEL_SUCCESS,
         payload:data.items
      })
      
   }  catch(error){
        console.log(error.response.data);
        dispatch({
           type:SUBSCRIPTIONS_CHANNEL_FAIL,
           payload: error.message
        })
   }
}