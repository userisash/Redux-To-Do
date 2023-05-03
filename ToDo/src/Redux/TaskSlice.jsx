import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name:"Tasks",
    initialState:[
        {id:1, title:"Task-1", complete: false},
        {id:2, title:"Task-2", complete: false},
        {id:3, title:"Task-3", complete: true},
    ],
    reducers: {
        addTask:(state, action) =>{
            const newTask ={
                id: Date.now(),
                title: action.payload.title,
                complete: false
            }
            state.push(newTask)
            }
    }
})

export const {addTask} = TaskSlice.actions

export default TaskSlice.reducer