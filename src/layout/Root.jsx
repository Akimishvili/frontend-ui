import Footer from "../partials/Footer"
import Header from "../partials/Header"
import { Outlet } from "react-router-dom"

function Root(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Root