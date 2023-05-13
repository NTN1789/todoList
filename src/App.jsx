import { useState } from 'react'
import * as React from 'react';




import './App.css'
import { Item } from './test'

function App() {
  const [task, setTask] = useState('')
  const [listTask , setListTask] = useState([])


  const adicionarTask = () => {
      if(!task) return alert ('tarefa não preenchida!!')
      
      const newTask = {

        id: Math.random(),
        checkout:task,
        checked: false,
      }

        setListTask([...listTask,newTask])
        setTask("");

  } 

  const  removerTask = (id) => {
    const novaList =   listTask.filter(task => task.id !==id )
      setListTask(novaList)
  }


  const checked = (id, checked) => {
      const index = listTask.findIndex(task => task.id == id )

      const newList = listTask
      newList[index].checked = !checked

      setListTask([...newList])

  }

  return (
 
       <div class="algo">
  
       
        <h1>To do list</h1>
        <input value={task}  placeholder="Digite sua tarefa"  onChange={(e) => setTask (e.target.value)}/>
        <button onClick={adicionarTask} >  Adicionar</button>
          <ul>

            {listTask.map((task) => (
              <>
              <Item  checked={task.checked}  key={task.id}> 
                  <p>{task.checkout}</p>
                  <button onClick={() => checked (task.id, task.checked )}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>
                  </button>

                  <button onClick={() => removerTask (task.id)}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                   </button>
                  </Item>
                 
              </>



            ))}
          </ul>
    
    </div>
  
  )
}

export default App
