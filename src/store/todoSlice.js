import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos : [{title : "Redux" , text : "React"}]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                title : action.payload.title,
                text : action.payload.text
            }
            state.todos.push(todo)
        },
        deleteTodo : (state,action) => {
            state.todos = state.todos.filter((i)=>(i.title !== action.payload.title))
        }
    } 
})

export const {addTodo,deleteTodo} = todoSlice.actions

export default todoSlice.reducer