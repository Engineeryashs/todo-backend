import axios from "axios";
import { useEffect } from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const [taskBar,setTaskbar]=useState(false);
    const token=localStorage.getItem("token");
    const [userInfo,setUserInfo]=useState({});
    const navigate=useNavigate();
    
    useEffect(()=>{async function userFetch(){
        try {
            let userDetails=await axios.get("http://localhost:3000/api/vi/user/getUserData",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log("Hello ji "+userDetails.data);
            setUserInfo(userDetails.data.user)
        } catch (error) {
            console.log(error);
        }
    }
userFetch();
    },[])
    return (
        <nav className="flex bg-gray-700 h-12 text-white justify-between content-center py-2">
            <div>
                <span className="mx-8 text-xl">iTask</span>
            </div>
            <ul className="flex gap-4 mx-8">
                
                <li className="cursor-pointer hover:text-cyan-200 hover:font-bold transition-all duration-500">{userInfo.name+"  "+userInfo.lastName}</li>
                <li>{<img className="cursor-pointer border rounded-full w-[30px] h-[30px] text-center" src={userInfo.avatar} alt={"profile pic"} onClick={()=>{setTaskbar(!taskBar)}}/>}  </li>
                {taskBar&&<div className="absolute right-2 top-8 bg-red-500 mt-2 w-36 bg-white text-black rounded-md shadow-lg z-10 border flex flex-col">
                    <ul className="space-y-2 cursor-pointer">
                 <li className=" text-sm px-4 py-1 hover:bg-gray-200 hover:text-blue-500" onClick={()=>{
                    navigate("/protectedRoute/update")
                 }}>Update Profile</li>
                   <li className=" text-sm px-4 py-1 hover:bg-gray-200 hover:text-blue-500" onClick={()=>{
                    navigate("/protectedRoute/updatepassword")
                 }}>Update Password</li>
                 {/*Here we use WrapperComponents to provide protected Route functionalities */}
                    <li className="text-sm px-4 py-1 hover:bg-gray-200 hover:text-blue-500" onClick={()=>{
                        localStorage.removeItem("token");
                        navigate("/")
                    }}>Log out</li>
                    </ul>
   
                    </div>}
                  
            </ul>
        </nav>

    )
}