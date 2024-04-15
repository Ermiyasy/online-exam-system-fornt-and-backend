import { Outlet} from "react-router-dom";

import Header from "./Header";
import '../index.css'

import Footer from "../Footer";
function Body(){
     
    return(
        <div className="Body">
              
            <Header />
             <Outlet/>
            <Footer/>
        
        </div>     
    );

}
export default Body