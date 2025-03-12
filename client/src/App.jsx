import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Signin from "./pages/Signin.jsx"
import SignUp from "./pages/SignUp.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Header from "./components/Header.jsx"

const App = ()=>{
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<SignUp/>}/> 
          <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/Projects" element={<Projects/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App