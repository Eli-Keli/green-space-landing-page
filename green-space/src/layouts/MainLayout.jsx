import { Outlet } from "react-router-dom"
import NavBar from '../components/Navbar.jsx'


export const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}