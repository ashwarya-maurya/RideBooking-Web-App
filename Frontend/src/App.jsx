import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectedWrap from './pages/UserProtectedWrap'
import UserLogout from './pages/UserLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={<UserProtectedWrap><Home/></UserProtectedWrap>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain_login' element={<CaptainLogin/>} />
        <Route path='/captain_signup' element={<CaptainSignup/>} />
        <Route path='/logout' element={<UserProtectedWrap><UserLogout/></UserProtectedWrap>}/>
      </Routes>
    </div>
  )
}

export default App