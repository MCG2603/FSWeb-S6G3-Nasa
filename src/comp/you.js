import React from "react";


const You=(props)=>{


    const{verilerurl}=props;
    return (
        
   <div>
    <iframe width="420" title="Youtube video player" height="315" src={verilerurl}/>
   </div>
)
    }

    export default You;