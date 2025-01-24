import { BrowserRouter , Routes ,Route } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/Signup'
import Header from './Component/Header'
import './index.css'
import User from "./pages/User"
import Teacher from "./pages/Teacher"





function App() {
  

  return (
  

    <BrowserRouter>
    
    <Header/> 
    
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/Signup' element={<SignUp/>} />
      <Route path='/User' element={<User/>} />
      <Route path='/Teacher' element={<Teacher/>} />



    </Routes>
    
    </BrowserRouter>

  )
}

export default App
