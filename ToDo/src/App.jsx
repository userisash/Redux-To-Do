import {useState} from 'react';
import { Form } from "./components/Form";
import { Provider } from 'react-redux';
import  Tasks  from "./components/Tasks";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './Redux/ToDoApp/actions/Crud';

function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting task state for conditional rendering
  const tasks = useSelector((state)=>state.operationsReducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTasks state
  const [editTask, setEditTask]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(task)=>{
    setEditFormVisibility(true);
    setEditTask(task);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper">
      <br></br>
      <h1 className="text-center">TODO-APP USING REACT-REDUX</h1>
      <Form editFormVisibility={editFormVisibility} editTask={editTask}
      cancelUpdate={cancelUpdate}/>
      <Provider>
      <Tasks handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      </Provider>
      {todos.length > 1 && (
        <button className='btn btn-danger btn-md delete-all'
        onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
      )}
    </div>
  );
}

export default App;