import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "./store/todoSlice"

export default function App(){

  const [titleIpt,setTitleIpt] = useState("") 
  const [textIpt,setTextIpt] = useState("") 
  const [error,setError] = useState("")
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)


  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    if(titleIpt !== "" && textIpt !== ""){
      dispatch(addTodo({
        title : titleIpt,
        text : textIpt
      }))
    }
    else{
      setError("Addition issues pls enter valid value")
    }
    e.reset()

  }

  return(
    <>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Title..." value={titleIpt} onChange={(e)=>setTitleIpt(e.target.value)}/>
        <input type="text" placeholder="Enter Your Text..." value={textIpt} onChange={(e)=>setTextIpt(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <section>
        {todos.map((i)=>(
          <div key={i.title}><span>{i.title}</span>:<span>{i.text}</span><button onClick={()=>dispatch(deleteTodo(i))}>Delete</button></div>
        ))}
      </section>
    </>
  )
}