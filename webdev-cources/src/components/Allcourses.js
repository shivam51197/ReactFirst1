import React,{useState} from "react";


const Allcourse=()=>{
    const[courses, setcourse]=useState([

        {title:"Java Course",discription:"this is demo course"},
        {title:"Django Course",discription:"this is demo course"},
        {title:"ReactJs Course",discription:"this is demo course"}
    ])

    return(
        <div>
            <h1>All course</h1>
        </div>

    )
}

export default Allcourse;

