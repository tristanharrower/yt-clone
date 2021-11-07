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

const Sidebar = ({ sidebar, handleToggleSidebar }) => {


    return (
        <nav className={sidebar ? "sidebar open" : "sidebar"}
        onClick={()=>handleToggleSidebar(false)}
        >
            <li>
                <MdHome size={23}/>
                <span>Home</span>
            </li>
            <Link to ="/feed/subscriptions" className="subscriptions">
                <li>
                    <MdSubscriptions size={23}/>
                    <span>Subscriptions</span>
                </li>
            </Link>
            <li>
                <MdThumbUp size={23}/>
                <span>Home</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>Histroy</span>
            </li>
            <hr />
            <li>
                <MdSentimentDissatisfied size={23}/>
                <span>I don't Know</span>
            </li>

            <hr />
            <li>
                <MdExitToApp size={23}/>
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    )
}

export default Sidebar
