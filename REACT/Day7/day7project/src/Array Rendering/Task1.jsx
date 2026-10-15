import React from 'react'

const Task1 = () => {

    const languages=["java","python","react","js",".Net"]
  return (
   <>
   
    <div className='bg-blue-400 text-black p-3 flex items-center gap-2'>
        {languages.map((e,i)=>(

          <p key={i}>{e}</p>

        ))}


    </div>
    
    
    </>
  )
}

export default Task1