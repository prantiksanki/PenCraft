import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)          // useSelector ->  Redux status check function 
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]


  return (
    <header className='py-3 bg-gray-500 shadow'>
      <Container>
        
        {/* ###########  NAV BAR START   #########*/}
        <nav className='flex'>


        {/*###########  LOGO ADD   ###########*/}
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'/>
              
              </Link>
          </div>


          {/* ##############  HEADER ELEMENTS INITIALIZE   ############*/}
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}  // NAVIGATE USED TO REDIRECT TO ANOTHER PATH 
                
                className='px-6 py-2 duration-200 rounded-full inline-bock hover:bg-blue-100'
                >{item.name}</button>
              </li>
            ) : null
            )}


            {/*
             
            *************************************************************
            {condition && ()} 
            => HERE IF, CONDITION WILL TRUE THEN CODE UNDER (), WILL EXECUTE 
            
            *************************************************************
            */}
            
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}


            
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header