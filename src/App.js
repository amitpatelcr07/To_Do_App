import './App.css'
import { useState } from 'react'
function App() {
  const [task,setTask]=useState([])
  const [string,setString]=useState('')
  const [clickItem,setClickItem]=useState();
  const [addUp,setaddUp]=useState(true);
  const [deletItem,setDeleteItem]=useState([]);
// Add or Update Handler    

  const addUpHandler=(type)=>{
       
    if(string==''){
      alert("Please Enter the value");
      return null;
    }
       if(type=='Add' &&addUp==true){
         setTask([...task,{name:`${string}`,status:'Active'}])
         
       }else if(addUp==false){
          let arr=task;
         let x= arr.map((val,ind)=>{
            if(ind==clickItem){
              return {name:`${string}`,status:'Active'};
            }else{
              return val;
            }
          })
          setTask(x);
           setaddUp(true); 
           
       }   
       setString(''); 
  }
  
//   Getting input form input box

  const getInputHandler=(e)=>{
        setString(e.target.value)
  }
  
  //    Edit or Delete Handler       


  const editDelHandler=(e,id)=>{
   
       if(e=='Edit'){
        setaddUp(false);
        setClickItem(id);
         let value=task.filter((val,index)=>{
          if(id==index){
            console.log(val);
            setString(val.name)
            return val;
            
          }
         });
         
       }else if(e=='Delete'){
             
           let arr=task.filter((val,ind)=>{
            if(ind!=id){
              return val;
            }else{
              setDeleteItem([...deletItem,val]);
            }
           })
           setTask(arr);
          console.log(arr,id);
       } 
            
  }
  console.log(deletItem); 

 return <>
  <div className="Input-Header">
    <input  onChange={getInputHandler} value={string}/>{addUp?<button onClick={()=>{addUpHandler('Add')}} type='add'>Add</button>:<button onClick={()=>{addUpHandler('Update')}} type='Update'>Update</button>}
  </div>
  <div className="Todo-Display">
  <h3>{task.length} Pending Task !!</h3>
    {task.map((val,id)=>{
      return <>
        <ul className='list-item'>
          <li>{val.name}</li>
          <li><button onClick={()=>{editDelHandler('Edit',id)}}>Edit</button><button onClick={()=>{editDelHandler('Delete',id)}}>Delete</button></li> 
        </ul>
      </>
    })}
    
  </div>
  
  <div className='Deleted-item'>
  
  {deletItem.length!=0?<h3>{deletItem.length} Completed  Task😍😍</h3>:null}
    {deletItem.map((val,ind)=>{
      return <>
        <ul>
          <del>{val.name}</del>
        </ul>
      </>
    })}
  </div>
 </>
}

export default App;

