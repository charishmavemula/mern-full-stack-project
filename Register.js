import React,{useState} from 'react' 
import axios from 'axios' 
import {  useNavigate } from 'react-router-dom' 
import Layout from '../../components/Layout/Layout' 
import { toast } from 'react-toastify'; 
import "../../styles/AuthStyles.css" 
function Register() { 
  const [fullName, setFullName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const[Phone,setPhone] = useState("") 
    const[Address,setAddress] = useState("") 
    const navigate = useNavigate() 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    try{ 
      const res=   axios.post( 
       "/api/auth/register", 
      {fullName,email,password,Phone,Address} 
      ); 
      if(res.data.suuccess){ 
       toast.success(res.data.message) 
       navigate('/login'); 
      }else{ 
       toast.error(res.data.message) 
      } 
   }catch(error){ 
       console.log(error) 
       toast.error('Something Went Wrong') 
   } 
} 
 
  return ( 
    <Layout title={"Register form"}> 
    <div className="container"> 
      <h2>Registration</h2> 
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        /> 
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        /> 
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        /> 
        <input 
          type="text" 
          placeholder="Phone" 
          value={Phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        /> 
        <input 
          type="text" 
          placeholder="Address" 
          value={Address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        /> 
        <input type="submit" value="Register" /> 
      </form> 
    </div> 
    </Layout> 
  ); 
} 
 
export default Register;