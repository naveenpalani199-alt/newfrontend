

const Task2 = () => {

    const student={

        name:"rahul",
        age:23,
        course:"python",
        city:"chennai"

    }
  return (
    <>
    <div className="bg-blue-400 text-black p-3 rounded-2xl">
       <h2>Student Details</h2>
       <p>Name:{student.name}</p>
       <p>Age:{student.age}</p>
       <p>Course:{student.course}</p>
       <p>City:{student.city}</p>

    </div>
    </>
    
  )
}

export default Task2