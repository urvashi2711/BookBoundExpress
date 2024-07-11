import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Book_Card from '../Components/Book_Card';

const Cart = () => {
    let user=useSelector(state=>state.user.user);
    let [books,setBooks]=useState([]);
    let [rerun , setRun]= useState(false);
    useEffect(()=>{
        async function ab(){
            let response=await axios.post('http://localhost:8080/get_cart',{id:user._id});
            response=response.data.cart
            setBooks(response);
            console.log(response)
        }
        ab();
    },[rerun])
  return (
    <div className='grid grid-cols-3 p-24 gap-14'>
        {
            books.map((x,index)=>(
                <Book_Card book={x} run={rerun} makerun={setRun}/>
            ))
        }
    </div>
  )
}

export default Cart