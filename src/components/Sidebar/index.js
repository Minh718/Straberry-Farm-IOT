import React from 'react'
import "./style.scss"
import {FaRegSmileBeam} from "react-icons/fa"
import LinkSidebar from '../LinkSidebar'
const links = [
  {
    name: "Tổng quan",
    icon: <FaRegSmileBeam/>
  },
  {
    name: "Điều khiển",
    icon: <FaRegSmileBeam/>
  },  {
    name: "Dữ liệu",
    icon: <FaRegSmileBeam/>
  },  {
    name: "Chẩn đoán",
    icon: <FaRegSmileBeam/>
  },  {
    name: "Thông báo",
    icon: <FaRegSmileBeam/>
  }
]
export default function Sidebar() {
  return (
    <>
    <div className='sidebar-header'>
    <div className='sidebar-header-header'>
      <img src='./straberry.png'/>
      <h2>Strawberry Mastery</h2>
    </div>
    <div className='sidebar-header-bottom'>
      {
        links.map((link, index)=>{
          return <LinkSidebar index={index} link={link}/>
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
