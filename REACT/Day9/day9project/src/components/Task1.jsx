import { useState } from "react"


const Task1 = () => {



    const [name,setName] = useState("")

    const handleName = (e)=>{
        setName(e.target.value)

    }

   
  return (
   <>
    <div>
        
        <input type="text" onChange={handleName} placeholder="Enter the name"/>
        <p>Name:{name}</p>

    </div>
   
   </>
  )
}

export default Task1