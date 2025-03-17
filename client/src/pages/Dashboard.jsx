import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import DashboardSidebar from '../components/DashboardSidebar.jsx';
import DashBoardProfile from '../components/DashBoardProfile.jsx';
const Dashboard = () => {
  const location = useLocation()
  const [tab,setTab] = useState("");
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const fromTab = urlParams.get("tab")
    if(fromTab){
      setTab(fromTab)
    }else{
      setTab("/dashboard")
    }
  },[location.search])
  return (
  <div className='min-h-screen flex flex-col md:flex-row'>
      {/*  side bar dashboard */}
      <div className="md:w-56">
          <DashboardSidebar/>
      </div>
      {
          tab === "profile" && <DashBoardProfile/>
      }
    </div>
  )
}

export default Dashboard
