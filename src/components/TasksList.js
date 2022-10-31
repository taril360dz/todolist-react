const TasksList = (props)=>
{
    return (<div className='row py-4'>
    <div className='col'>
      <div className='mx-auto' style={{width:'75vw',backgroundColor:'black',borderRadius:'10px', height:'50vh', 'overflow-y':"scroll"}}>
      {props.tasks.map(task => {
      return <div className="bg-light my-3 py-3"><h3>{task}</h3></div>
    })}
      </div>
    </div>
  </div>)
}
export default TasksList;