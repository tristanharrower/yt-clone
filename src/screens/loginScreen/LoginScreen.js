import React from 'react'

import './_loginScreen.scss';

const LoginScreen = () => {
    return (
        <div className='login'>
            <div className='login_container'>
                <img src='https://pngimg.com/uploads/youtube/youtube_PNG2.png' 
                     alt=''
                />
                <button>Login with Google</button>
                <p>This projects is made using YOUTUBE DATA API</p>
            </div>
        </div>
    )
}

export default LoginScreen
