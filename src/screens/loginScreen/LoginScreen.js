import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth.action'


import './_loginScreen.scss';



const LoginScreen = () => {
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(login())
     }

    return (
        <div className='login'>
            <div className='login_container'>
                <img src='https://pngimg.com/uploads/youtube/youtube_PNG2.png' 
                     alt=''
                />
                <button onClick= {handleLogin}>Login with Google</button>
                <p>This projects is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
