import React, {useEffect, useState}  from "react";
import "./App.css";
import axios from 'axios';
import Image from "./comp/image";
import You from "./comp/you";


const dummyData={
  date: "2023-05-31",
  explanation: "How did we get here? We know that we live on a planet orbiting a star orbiting a galaxy, but how did all of this form? Since our universe moves too slowly to watch, faster-moving computer simulations are created to help find out. Specifically, this featured video from the IllustrisTNG collaboration tracks gas from the early universe (redshift 12) until today (redshift 0). As the simulation begins, ambient gas falls into and accumulates in a region of relatively high gravity.  After a few billion years, a well-defined center materializes from a strange and fascinating cosmic dance. Gas blobs -- some representing small satellite galaxies -- continue to fall into and become absorbed by the rotating galaxy as the present epoch is reached and the video ends.  For the Milky Way Galaxy, however, big mergers may not be over -- recent evidence indicates that our large spiral disk Galaxy will collide and coalesce with the slightly larger Andromeda spiral disk galaxy in the next few billion years.    Open Science: Browse 3,000+ codes in the Astrophysics Source Code Library",
  media_type: "video",
  service_version: "v1",
  title: "Simulation: A Disk Galaxy Forms",
  url: "https://www.youtube.com/embed/X4UF9Akman0?rel=0"
  }


function App() {

  
const[veriler,setVeriler]=useState("");
const[date,setDate]=useState("2023-05-31");
const changeHandler=(event)=>{
  console.log(event.target.value);
  setDate(event.target.value);
}
useEffect(()=>{
axios.get("https://api.nasa.gov/planetary/apod?api_key=fQ1fs2zHdWPQBHLZVq1SsR5Xl49nw7PQbBjJ4pgf&date="+date).then((data)=>{
  console.log(data)
setVeriler(data.data)});

},[date])
  return (
    <div className="App">
      <input type="date" value={date} onChange={changeHandler} />
      <h1>{veriler.title} </h1>
      {veriler.media_type=="image"  
      ? <Image verilerurl={veriler.url} />
      : <You verilerurl={veriler.url}/>}
      <p className="image">
          {veriler.explanation}
      </p>
      
    </div>
  );
  }

export default App;
