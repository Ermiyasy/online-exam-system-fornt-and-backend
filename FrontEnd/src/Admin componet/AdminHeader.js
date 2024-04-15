import "./AdminHeader.css"
import Side from './Admin main body/AdminSide'
import Menuheader from "./header/Menuheader";

function Header(){
     
    return(
        <div className="div1" >
               <Side/>
            <div><p className="titleh"> Online Examination System </p></div>
            <div className="title" > </div>
            <div className="Menulist">  
              <Menuheader/>
              </div>
        </div>    
    );

}
export default Header