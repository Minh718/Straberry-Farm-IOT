import React from 'react'
import DiagData from '../DiagData/DiagData';
import { DiaDatalog } from './DiaDatalog';
import "./style.scss"
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = [
    {
        name: "Nhiệt độ",
        color: "rgb(15, 136, 249)"

    },
    {
        name: "Độ ẩm",
        color: "rgb(16, 213, 248)"

    },
    {
        name: "Ánh sáng",
        color: "rgb(252, 163, 61)"
    },
    {
        name: "Tình trạng cây",
        color: "rgb(63, 221, 102)"
    }
]

export default function Datalog() {
    const [mode, setMode] = React.useState(0);
  return (
    <div className='datalog'>
        <div className='datalog-left'>
            <button style={{ background: mode === 0 && data[mode].color}} onClick={()=>setMode(0)} className={mode === 0 ? "active" : ""}>Nhiệt độ</button>
            <button style={{ background: mode === 1 && data[mode].color}} onClick={()=>setMode(1)} className={mode === 1 ? "active" : ""}>Độ ẩm</button>
            <button  style={{ background: mode === 2 && data[mode].color}} onClick={()=>setMode(2)} className={mode === 2 ? "active" : ""}>Ánh sáng</button>
            <button  style={{ background: mode === 3 && data[mode].color}} onClick={()=>setMode(3)} className={mode === 3 ? "active" : ""}>Tính trạng cây</button>
        </div>
        <div className='datalog-right'>
            <DiagData data1= {data[mode]} labels={labels}/>
            <div className='mode-diag'>
                <button>Ngày</button>
                <button>Tháng</button>
                <button className='active'>Năm</button>
            </div>
        </div>
    </div>
  )
}
