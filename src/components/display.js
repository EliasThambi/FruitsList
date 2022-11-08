import {Button} from '@mui/material';
import { useState} from 'react';
import './display.css'
import Card from './card'

function Display(props){
        let {array ,setData, inputelement}=props
        const[flag,setFlag]=useState(false)
        const[index1,setIndex]=useState()

        // setData([data,props])
    function Delete(index){
        array.splice(index,1)
        // setData((data)=> {let x=`${data}xx` ;return x})   Updater function
        setData([...array]) 

    }
    function Edit(item,index){
        inputelement.current.value=item
        setIndex(index)
        // console.log(item)
        setFlag(!flag)
        
        // props.setData(props[index],item)
    }
    function Update(){
        let g=inputelement.current.value
        array[index1]=g
        setFlag(!flag)
        // console.log(array)
        setData([...array])

    }
    return(
        <>
        <div className='displayall'> 
                        {flag&&
                            <Button variant="contained" onClick={Update}>Update</Button>
                        }
                {
                array.map((item, index)=>(
                    <Card key={index} item= {item} index= {index} flag={flag} Delete={Delete} Edit={Edit}/>
                    
                ))
                
                }
           
        </div>
        </>
    );
}
export default Display;