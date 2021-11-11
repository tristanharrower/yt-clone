import React from 'react'
import './_sidebar.scss'

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdHome,
    MdSentimentDissatisfied,
} from "react-icons/md"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    
    const handleLogOut = () => {
        dispatch(log_out())
        history.push('/auth')
    }


    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}
        onClick={()=>handleToggleSidebar(false)}
        >
            <Link to ="/">
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li>
            </Link>

            <Link to ="/feed/subscriptions" className="subscriptions">
                <li>
                    <MdSubscriptions size={23}/>
                    <span>Subscriptions</span>
                </li>
            </Link>
            <Link to ="/likedVideos" >
                <li>
                    <MdThumbUp size={23} />
                    <span>Liked Videos</span>
                </li>
            </Link>
            <hr />
            <li onClick={handleLogOut}>
                <MdExitToApp size={23}/>
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
