

const Student = () => {

  const studentName = "Arun";
  const age = 22;
  const course = "React JS";
  const isActive = true;
  const fees = 15000;
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Student Details
        </h1>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Student Name:</span> {studentName}
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold">Age:</span> {age}
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold">Course:</span> {course}
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-green-600 font-semibold">
              {isActive ? "Active" : "Inactive"}
            </span>
          </p>

          <p className="text-lg text-gray-700">
            <span className="font-semibold">Fees:</span> ₹{fees}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Student