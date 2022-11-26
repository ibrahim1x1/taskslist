
import './App.css';
import { AddTask } from "./components/AddTask"
import { ListTask } from "./components/ListTask"

function App() {
  return (
    <div>
       <img style={{width:"500px", margin:"30px", marginLeft:"410px"}} src='./Images/todo.png' alt='ToDo' />
        <br/>
        <ListTask/>
        <br/>
        <AddTask/>
    </div>
  );
}

export default App;
