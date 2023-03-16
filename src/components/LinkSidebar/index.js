import React from 'react'
import "./style.scss"
export default function LinkSidebar({link}) {
  return (
    <div className='link-single'>
        <div className='link-single-left'>
            {link.icon} <h3>{link.name}</h3>
        </div>
        <div className='link-single-right'>dsa</div>
    </div>
  )
}
