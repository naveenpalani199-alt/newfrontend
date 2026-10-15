import { useState } from "react"

const Task2 = () => {

    const [title,setTitle] = useState("Hello React")

    const changeText=()=>{

        setTitle("Welcome to React")
    }
  return (
    <>
    
    <div>
       <h2>{title}</h2>
       <button onClick={changeText}>change text</button>
    </div>
    
    </>
  )
}

export default Task2