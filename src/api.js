import axios from "axios";


const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyC5AhymIE_LGErew7D5IC0uCdXDwrX737Q",
    },
})

export default request;