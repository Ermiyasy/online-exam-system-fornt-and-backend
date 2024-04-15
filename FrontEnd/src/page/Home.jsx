
import"./logincard.css"
import Navbar from '../Navbar';
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

function Home(){
  
 
  return(
    <>
        <Navbar />
          <Outlet/>
        <Footer/>
        </>
  );

}
export default Home