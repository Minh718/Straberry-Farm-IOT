import React from 'react'
import DataFarm from './DataFarm'
import OverallChart from './OverallChart'
import { faLightbulb, faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { faDroplet, faSeedling } from '@fortawesome/free-solid-svg-icons'
import "./style.scss"
import DiagData from '../DiagData/DiagData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export default function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashboard-header'>
        <div className='dashboard-header-left'>
        <OverallChart/>
        <div className='dashboard-header-left-mode'>
          <button> Ngày</button>
          <button> Tuần</button>
          <button className='active'> Tháng</button>
          </div>
        </div>
        <div className='dashboard-header-right'>
        <div className='dashboard-header-right-top'>
        <div className='dashboard-header-right-top-left'>
          <div className='dashboard-header-right-top-left-left'>
            <FontAwesomeIcon icon={faDroplet}/>
          </div>
          <div className='dashboard-header-right-top-left-right'>
            <h2>Độ ẩm</h2>
            <p>32%</p>
          </div>
        </div>
        <div className='dashboard-header-right-top-right'>
          <select>
            <option>Độ ẩm</option>
            <option>Nhiệt độ</option>
            <option>Ánh sáng</option>
          </select>
          </div>
          
          </div>
        <div className='dashboard-header-right-bottom'>

          <DiagData labels={labels} data1={{curVal: 52, prevVal: 15,isCondition: false, color: "#10D5F8",name: "Độ ẩm",  icon: faDroplet, postfix: "%"}}/>
          <div className='dashboard-header-right-bottom-mode'>
          <button> Ngày</button>
          <button> Tuần</button>
          <button className='active'> Tháng</button>
          </div>
</div>
        </div>
      </div>
      <div className='dashboard-bottom'>
        <div className='dashboard-bottom-row'>

          <DataFarm data={{curVal: 10, prevVal: 5 ,isCondition: false, color: "#0F88F9", name: "Nhiệt độ", icon: faTemperatureLow, postfix: "F"}}/>
          <DataFarm data={{curVal: 52, prevVal: 15 ,isCondition: false, color: "#10D5F8",name: "Độ ẩm",  icon: faDroplet, postfix: "%"}}/>
        </div>
        <div className='dashboard-bottom-row'>

          <DataFarm data={{curVal: 42, prevVal: 5 ,isCondition: false, color: "#FCA33D",name: "Ánh sáng",  icon: faLightbulb, postfix: "C"}} />
          <DataFarm data={{isCondition: true, color: "#3FDD66",name: "Tình trạng cây",  icon: faSeedling, curVal: "Good"}}/>
      </div>
        </div>
    </div>
  )
}
