import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import {Header, Footer} from "./components/index"

function App() {

  const [loading, setLoading] = useState(true) ; 
  const dispatch  = useDispatch() ; 

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) =>
    {
      if(userData)
      {
        dispatch(login({userData})) ;
      }
      else 
      {
        dispatch(logout()) ;
      }
    })

    .finally(() => setLoading(false)) 
  

  }, [])

  return !loading ? 
  (
    <div className="flex flex-col w-full min-h-screen text-gray-900 bg-gray-100 ">
      
      <Header />
  
     
      <main className="container flex-1 px-4 py-6 mx-auto">
        <h1 className="mb-4 text-3xl font-semibold text-center">Blogging Application</h1>
        
      </main>
  
     
      <Footer />
    </div>
  ) 
  
  : 
  
  (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <span className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></span>
    </div>
  );
  
    
}

export default App
