import {Button} from '@mui/material';
import '../components/card.css'
function Card({item, index, Edit, Delete,flag}) {
    return ( <div className='card'>
    <div className='items'>
    {index+1}.
    {item}
    </div>
    <div className="buttons">
    
    <Button variant="contained"  onClick={()=>Edit(item,index)} >Edit</Button>
    {!flag&&
    <Button variant="contained" onClick={()=>Delete(index)} >Remove</Button>
    }
    </div>
</div> );
}

export default Card;