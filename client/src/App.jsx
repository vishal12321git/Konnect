import React,{lazy} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(()=>import("./pages/Login"))
const Chat = lazy(()=>import("./pages/Chat"))
const Group = lazy(()=>import("./pages/Group"))

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/chat/:chatId' element={<Chat/>}></Route>
      <Route path='/group' element={<Group/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
