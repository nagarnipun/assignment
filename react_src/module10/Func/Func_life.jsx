

import React,{useState,useEffect} from 'react'
import Img_func from './Img_func'

function Func_life() {
    
    const [data,setData]=useState({
        number:1,
        isImage:true
    });
    
    
    useEffect(()=>{
        console.log('Main comp didmount / update');
    },[data.number]);  // update any number then again call this function

    return (
        <div className="container p-5 my-5 ">
            <h1>Func_life</h1>
            <button onClick={() =>  setData({...data,number:data.number+1})}>+</button>
            <h1>{data.number}</h1>
            <button onClick={() =>  setData({...data,number:data.number-1})}>-</button>

            <hr />
            <button onClick={() => setData({...data,isImage:false})}>Hide</button>
            <button onClick={() => setData({...data,isImage:true})}>Show</button>
            {data.isImage ? <Img_func /> : null}

        </div>
    )
}

export default Func_life