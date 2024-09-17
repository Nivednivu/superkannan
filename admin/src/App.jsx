import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminList from './Components/AdminList/AdminList'
import Admin from './Components/Admin/Admin'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Footer  from './Components/Footer/Footer'
import OverviewPage from './Components/Overview/OverviewPage'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Admin/>}/>
      <Route path='/slider' element={<Sidebar/>}/>
      <Route path='/admin' element={<Admin insideAdminRegister/>}/>

      <Route path='/list' element={<AdminList/>} />
      <Route path='/overview' element={<OverviewPage/>}/>
    </Routes>
    <Footer/>
    </> 
  )
}

export default App
