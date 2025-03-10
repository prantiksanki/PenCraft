import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from "../../store/authSlice"

export default function LogoutBtn() {

    const dispatch = useDispatch() ;

    const logoutHandler =  () =>
    {
        authService.logout()
        .then(()=>{dispatch(logout())})
    }

  return (
    <div>
      <button className = "inline-block px-6 py-2 duration-200 rounded hover:br-blue-100-full">Logout</button>
    </div>
  )
}
