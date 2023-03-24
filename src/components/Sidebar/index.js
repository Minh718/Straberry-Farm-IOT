import React from 'react'
import "./style.scss"
import { FaRegSmileBeam } from "react-icons/fa"
import LinkSidebar from './LinkSidebar'
const links = [
    {
        name: "Tổng quan",
        icon: <FaRegSmileBeam />,
        path: "/"
    },
    {
        name: "Điều khiển",
        icon: <FaRegSmileBeam />,
        path: "/control"
    }, {
        name: "Dữ liệu",
        icon: <FaRegSmileBeam />,
        path: "/data"
    }, {
        name: "Chẩn đoán",
        icon: <FaRegSmileBeam />,
        path: "diagnose"
    }, {
        name: "Thông báo",
        icon: <FaRegSmileBeam />,
        path: "notification"
    }
]

export default function Sidebar() {
    return (
        <>
            <div className='sidebar-header'>
                <div className='sidebar-header-header'>
                    <img src='./straberry.png' />
                    <h2>Strawberry Mastery</h2>
                </div>
                <div className='sidebar-header-bottom'>
                    {
                        links.map((link, index) => {
                            return <LinkSidebar index={index} link={link} />
                        })
                    }
                </div>
            </div>
            <div className='sidebar-bottom'>
                <button>Đăng xuất</button>
            </div>
        </>
    )
}
