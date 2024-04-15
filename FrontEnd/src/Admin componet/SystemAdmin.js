import { Outlet} from "react-router-dom";

import Header from "./AdminHeader";
import '../index.css'

import Footer from "../Footer";
function SystemAdmin(){
     
    return(
        <div className="Body">
              
            <Header /> 
             <Outlet/>
            <Footer/>
        
        </div>     
    );

}
export default SystemAdmin