import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./style.scss"
export default function Header() {
  return (
    <div className='header-home'>
      <div className='header-home-wrap'>
        <div className='header-home-left'
        
        >
          <h2>Chào mừng trở lại, Kiệt</h2>
          <p>Đây là hệ thống chăm sóc dâu tây môn Đồ án đa ngành</p>
        </div>
        <div className='header-home-right'>
          <div>
            <FaTimes/>
          </div>
          <div>
          <FaTimes/>
          </div>
          <div className='name-user'>
            <FaTimes/>
            <h2>Nguyễn Tuấn Kiệt</h2>
            <FaTimes/>
          </div>
        </div>
      </div>
      </div>
  )
}
