import { useState } from "react"

const Task1 = () => {

    const [count,setCount] = useState(0)

    const handleClick =()=>{

        setCount(count+1)
    }
     const handleDec =()=>{

        setCount(count-1)
    }
     const handleReset =()=>{

        setCount(0)
    }


    
  return (
   <>
   
    <div>
       <h1>{count}</h1>
       <button onClick={handleClick}>Increment</button>
       <button onClick={handleDec}>Decrement</button>
       <button onClick={handleReset}>Reset</button>

    </div>
    
    </>
  )
}

export default Task1