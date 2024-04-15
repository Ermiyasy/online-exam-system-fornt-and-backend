import loginimag from '../asset/bg-01.jpg'
import "./logincard.css"
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function LoginCard(){ 
   const [name ,setName] = useState('');
   const [email ,setEmail] = useState('');
   
  const [student ,setStudent] = useState([])
  useEffect (() =>{
    axios.get('http://localhost:8081/')
    .then(res =>setStudent(res.data))
    .catch(err => console.log(err));
  },[])
  
    const [ename,seteName]= useState();
  function handle (event){
    seteName(event.target.value);
  };
  return(
        <>
              <div className="login-card">
            <div>
            <img className='card-image' src={loginimag} alt="Login card " />
            </div>
                        <h2 className='card-title'>LOGIN PAGE</h2>
                <div className="login-input">
                        <label htmlFor="">User Name : 
                            <input value={name} onChange={ e => setName(e.target.value)} placeholder='Enter Your Name'
                               
                            />
                        </label>
                        <br />
                        <label  htmlFor="">Password :
                            <input type='password' placeholder='Enter Your Password'
                               
                            />
                        </label>
                        <br />
                        
                   <Link to="/Dep"><button value={loginimag} >Login</button></Link>
                   <Link to="/Admin"><button  >Login Admin</button></Link>
                   <Link to="/Instractor"><button  >Login Inst</button></Link>
                        <button type="reset">RESET</button>
                        <br />
                        <br />
                        <p className='card-text'>Thank you for working with us {ename}</p>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody >
                    {
                      student.map((data,i) =>(
                        <tr key={i}>
                          <td>{data.UserName}</td>
                          <td>{data.Email}</td>
                          <td>
                            <button>Update</button>
                            <button>Delete</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
        </div>
        </>
  );

}
export default LoginCard