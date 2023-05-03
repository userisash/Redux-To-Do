import {configureStore} from '@reduxjs/toolkit'
import TaskReducer from './TaskSlice'

export default configureStore({
    reducer:{
        tasks: TaskReducer,
    }
})