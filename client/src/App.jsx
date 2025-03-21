import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header.jsx"
import About from "./pages/About.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import Signin from "./pages/Signin.jsx"
import SignUp from "./pages/SignUp.jsx"
import Footercom from "./components/Footer.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footercom />
    </BrowserRouter>
  )
}
export default App