import { BrowserRouter , Routes ,Route } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/Signup'
import Header from './Component/Header'
import './index.css'
import Admin from "./pages/Admin"
import Reception from "./pages/Reception"
import Department from "./pages/Department"


function App() {
  

  return (
  

    <BrowserRouter>
    
    <Header/> 
    
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/Signin' element={<Signin/>} />
      <Route path='/Signup' element={<SignUp/>} />
      <Route path='/Admin' element={<Admin/>} />
      <Route path='/Reception' element={<Reception/>} />
      <Route path='/Department' element={<Department/>} />




    </Routes>
    
    </BrowserRouter>

  )
}

export default App
