import React,{useEffect} from 'react'

function Img_func() {


    useEffect(()=>{
        console.log('DID MOUNT');  
        return(()=>console.log('WillUnmount'));      },[]);


    return (
        <div>
            <img src="https://via.placeholder.com/600/92c952" width="100px" alt="" />
        </div>
    )
}

export default Img_func