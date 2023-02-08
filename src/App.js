import './App.css';
import {useState} from "react"

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  const [edit,setEdit]=useState('')

  function editInputBox(item){
    setEdit(item)
    setToDo(item.task)
    setToDos(toDos.filter((itemNotToUpdate)=>itemNotToUpdate.id!==item.id))
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝☕ </h2>
    </div>
    <div className="todos">
      <div className="input">
        <input value={toDo} onChange={(event)=>{setToDo(event.target.value)}} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setToDos([...toDos,{id:Date.now(),task:toDo,status:false}])}} className="fas fa-plus"></i>
      </div>
    </div>
    <div className="todos">
      {
        toDos.map((item)=>{
          return (
            <div className="todo">
              <div className="left">
                <p style={{textDecoration:item.status?'line-through red':''}}>{item.task}</p>
              </div>
              <div className="right">
                <i 
                  class="fa-regular fa-pen-to-square"
                  onClick={()=>{editInputBox(item)}}
                ></i>
                <i 
                  class="fa-solid fa-check"
                  onClick={()=>{
                      item.status=!item.status
                        setToDos([...toDos])
                      }
                    }  
                >
                </i>
                <i 
                  onClick={()=>{
                      setToDos(toDos.filter((itemNotToDelete)=>itemNotToDelete.id!==item.id))
                    }
                  } 
                  className="fas fa-times">
                </i>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>
  );
}

export default App;
