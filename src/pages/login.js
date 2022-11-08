import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useState} from "react"
import './login.css'


function Login() {
    const navigate=useNavigate();
    const [role,setRole]=useState('');
    const [user,setUsername]=useState('');
    const [flag1,setflag1]=useState(false)
    const [userna,setUserName]=useState('')
  const [pass,setPassword]=useState('')
    function submitlogin(){
        localStorage.setItem("loginvariable",true)
        setPassword(role)
        setUserName(user)
      
            if(role!=='1234' || user!=='admin'){
                setflag1(!flag1)
            }
            else{
                navigate("/cart")
            }
    }


    return ( 
    <>
    <div class="signin">
            <h1>SIGN IN</h1>
            <div class="name"><TextField  onChange={(e)=>setUsername(e.target.value)} id="outlined-basic" label="Enter name" variant="outlined" /></div><br></br>
            <div class="pwd"><TextField  onChange={(e)=>setRole(e.target.value)}id="outlined-basic" label="Enter password" variant="outlined" /></div><br></br>
            {flag1&&
            <p><span>Wrong Username or password</span></p>}
            <Button variant="contained" onClick={submitlogin}>Submit</Button><br></br>
            <p>Enter password : <span>admin</span> <br></br> Enter password : <span>1234</span> to login</p>
    </div>
    </>
     );
}

export default Login;