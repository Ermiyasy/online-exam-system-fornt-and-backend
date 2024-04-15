import './App.css';
import About from "./page/about";
import Intregration from "./Dept componte/Admin Body/intregration";
import Accept from './Dept componte/Admin Body/Dep-componet/Accept'
import PerpareExam from './Ins/PerpareExam';
import ViewCadidate from './Dept componte/Admin Body/ViewCadidate'
import Request from './Dept componte/Admin Body/Dep-componet/Request'
import DeptHome from "./Dept componte/Admin Body/Home";
import AddCource from "./Dept componte/Admin Body/Dep-componet/page/AddCource";
import Footer from './Footer';
import {Route, Routes} from 'react-router-dom'
import Contact from './page/contact';
import Home from './page/Home';
import Feedback from './page/Feedback';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Body from './Dept componte/Body';
import LoginCard from './page/LoginCard';
import Exam from './Dept componte/Admin Body/Exam';
import SystemAdmin from './Admin componet/SystemAdmin';
import AdminHome from './Admin componet/AdminHome';
import CreateNewAccount from './Admin componet/AdminBody componet/sub menu Admin/CreateNewAccount';
import UpdateAccount from './Admin componet/AdminBody componet/sub menu Admin/UpdateAccount';
import AdminQuestion from './Admin componet/AdminBody componet/AdminQuestion';
import UpdateTable from './Admin componet/AdminBody componet/sub menu Admin/UpdateTable';
import Instractor from './home componte/Instractor';
import AddExam from './home componte/Body/AddExam';
import ManageExam from './home componte/Body/ManageExam';
import SendOffer from './home componte/Body/SendOffer';
import ViewOffer from './home componte/Body/ViewOffer';
import ApproveOffer from './home componte/Body/ApproveOffer';
import SendCadidate from './home componte/Body/SendCandidate';
import StudentResult from './home componte/Body/StudentResult';
import InstractorBody from './home componte/InstractorBody';
import MangeExam from './Ins/ManageExam';
import ExamTable from './Dept componte/Admin Body/ExamTable';



function App() {
 
  return (
   <>
         
     <div>
      <Routes> 
        <Route path='/' element={<Home/>}>
            <Route path='/' element={<LoginCard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Feedback' element={<Feedback/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
        
         <Route path='/Dep' element={<Body/>}>
                        <Route path='/Dep/' element={<DeptHome />} />
                        <Route path="/Dep/Exam" element={<Exam />} />
                        <Route path="/Dep/ExamTable" element={<ExamTable />} />
                        <Route path="/Dep/AddCource" element={<AddCource />} />
                        <Route path="/Dep/Intregration" element={<Intregration />} />
                        <Route path="/Dep/ViewCadidate" element={<ViewCadidate />} />
                        <Route path="/Dep/AddExam" element={<PerpareExam />} />
                        <Route path="/Dep/MangeExam" element={<MangeExam />} />
                        <Route path="/Dep/feedback" element={<Feedback />} />
                        <Route path="/Dep/Accept" element={<Accept />} />
                        <Route path="/Dep/Request" element={<Request />} />
         </Route>

         <Route path='/Admin' element={<SystemAdmin/>}>
                        <Route path='/Admin/' element={<AdminHome />} />
                        <Route path="/Admin/NewAccount" element={<CreateNewAccount />} />
                        <Route path="/Admin/UpdateAccount" element={<UpdateAccount/>} />
                        <Route path='/Admin/UpdateAccount/updateTable' element={<UpdateTable/>} />
                        <Route path="/Admin/Question" element={<AdminQuestion/>} />
         </Route>

         <Route  path='/Instractor' element={<InstractorBody/>}>
         
                        <Route path="/Instractor/" element={<Instractor/>} />
                        <Route path="/Instractor/AddExam" element={<PerpareExam />} />
                        <Route path="/Instractor/ManageExam" element={<MangeExam />} />
                        <Route path="/Instractor/SendOffer" element={<SendOffer />} />
                        <Route path="/Instractor/ViewOffer" element={<ViewOffer />} />
                        <Route path="/Instractor/ApproveOffer" element={<ApproveOffer />} />
                        <Route path="/Instractor/SendCandidate" element={<SendCadidate />} />
                        <Route path="/Instractor/StudentResult" element={<StudentResult />} />
       </Route>

      </Routes>
      <Footer/>
     </div>
   </>
  );
}

export default App;
