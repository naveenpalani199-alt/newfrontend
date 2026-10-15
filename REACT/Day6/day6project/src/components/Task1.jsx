

const Task1 = () => {

    const courses=[

     "python","react","js","node","html"


  ]


  return (
     <>
    
    <div className="bg-amber-300 p-3 justify-center items-center rounded-2xl">
      {courses.map((e,i)=>(
         <div key={i}>{e}</div>

      ))}
    </div>
    </>
    
  )
  
}

export default Task1