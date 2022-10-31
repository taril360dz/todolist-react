import { useState } from 'react';
import './App.css';
import TasksList from './components/TasksList';


  const App = () => {
    const [value, setValue] = useState('')
    const [tasks, setTask]  = useState([])

    const handleChange = ($event) => 
    {
      setValue($event.target.value)
    }
    const handleSubmit = ($event)=>{
      $event.preventDefault()
      setTask((prev)=> {
        return [value,...prev]
      })
      setValue('')
    }

    return (
    <div className="container-fluid"> 
      <div className="row py-2">
        <div className='col'>
          <h1 className='text-primary text-center'>Simple React TODO</h1>
        </div>
      </div>
      <TasksList tasks={tasks} />
      <div className='row'>
        <form className='col' onSubmit={handleSubmit}>
          <div className='form-group my-4 mx-auto'>
            <input value={value} onChange={handleChange} type="text" className='form-control w-75 mx-auto my-4' placeholder='Task todo...'></input>
          </div>
          <div className='form-group my-2 w-75 mx-auto'>
            <button type='submit' className="btn btn-primary form-control">Add</button>
          </div>
        </form>
      </div>
    </div>

    )
}

export default App;
