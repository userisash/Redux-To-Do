import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../Redux/ToDoApp/actions/Crud';

 const Tasks = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const tasks = useSelector((state)=>state.operationsReducer);
  return tasks.map((task)=>(
    <div key={task.id} className='task-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={task.completed}
              onChange={()=>dispatch(handleCheckbox(task.id))}></input>
            )}
            <p style={task.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {task.task}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(task)}><Icon icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTask(task.id))}><Icon icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}
export default Tasks