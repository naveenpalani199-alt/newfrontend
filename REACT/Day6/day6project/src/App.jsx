import Employee from "./components/Employee";
import Task1 from "./components/Task1"
import Task2 from "./components/Task2"
import Task3 from "./components/Task3"


const App = () => {

  const employee = {
  name: "Prasanna",
  role: "Frontend Developer",
  salary: 30000,
  city: "Chennai"
};
  return (
    <>
     <Task1/>
     <Task2/>
     <Task3/>
     <Employee employee={employee}/>
    
    </>
  ) 
}

export default App