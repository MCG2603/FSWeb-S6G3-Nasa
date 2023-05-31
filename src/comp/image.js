import React from "react";


const Image=(props)=>{

  const{verilerurl}=props;
    return (
        
   <div>
    <img src={verilerurl}/>
   </div>
    
)
    }

    export default Image;