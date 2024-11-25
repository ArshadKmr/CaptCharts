import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Home from './components/Home'
import Register from './components/register/Register'
import Post from './components/posts/Post'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/posts' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
