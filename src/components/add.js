
import {Button} from '@mui/material';
import {useState,useRef} from 'react';
import Display from './display';
import {useNavigate} from 'react-router-dom';

import './add.css'
function Add() {
    const[inputvalue,setval]=useState()
    const[data,setData]=useState([])
    const navigate=useNavigate();

    const inputelement = useRef('');
    const onAdd=()=>{
        setData([...data,inputvalue])
        // setval(0)
    }
    const logout=()=>{
        navigate("/")
        localStorage.setItem("loginvariable",false)

        // setval(0)
    }
    return (  
        <>
        <div className='Adding'>
            <div className="add"><input ref={inputelement} onChange={(e)=>setval(e.target.value)} id="outlined-basic" label="Add items" variant="outlined" /></div>
            <div className='=btn1'><Button variant="contained" onClick={onAdd}>Add</Button></div> 
            <div><Button variant="contained" onClick={logout}>Logout</Button></div> 

        </div>
        <Display array={data} setData={setData} inputelement={inputelement}></Display>
        </>
    );
}

export default Add;