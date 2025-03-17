import { Sidebar } from "flowbite-react"
import {HiArrowSmRight, HiUser} from "react-icons/hi"
import { Link, useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
const DashboardSidebar = () => {
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
        <Sidebar className="w-full md:w-56">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Link to="dashboard?tab===profile">
                  <Sidebar.Item active={tab==="profile"} icon={HiUser} label={"User" }labelColor="dark">
                        profile
                    </Sidebar.Item></Link>
                    <Sidebar.Item  icon={HiArrowSmRight} className="cursor-pointer">
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
              

            </Sidebar.Items>

        </Sidebar>
    )
}

export default DashboardSidebar


