import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {

    return(

      <>
        <Header />
        <p>Hello world! Project Asuna Dev 01</p>
        <Outlet />
        <Footer />
      </>  
    );
}