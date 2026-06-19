import { useEffect } from 'react';
import {UpdateTask} from '../actions/UpdateTask';
import { useState } from 'react';
import { set } from 'react-hook-form';
const TodoItem = ({id, keyTask, task, nameStudent, isCompleted,arr}) => {
    useEffect(() => {
       if(arr){
           for(let i = 0; i < arr.length; i++){
               if(arr[i].isCompleted){
                   document.getElementById(i).checked = true
               }else{
                document.getElementById(i).checked = false
               }
           }
       }
    },[isCompleted])
    const UpdateChecked = (idChecked, key) =>{
        if(document.getElementById(idChecked).checked){
           UpdateTask({key: key, checked: true})
        }else{
            UpdateTask({key: key, checked: false})
        }
    }
    return (
       <div className="container-chores">
           <div className="elements-chores">
               <div className="container-form-checkbox">
                   <form>
                       <input className="checkbox-full-incomplete" id={id} type="checkbox" onClick={() => {UpdateChecked(id,keyTask)}}></input>
                   </form>
               </div>
               <div className="container-task">
                    <p className="task m-1">{task}</p>
                    <p className="name-student m-1">{nameStudent}</p>
               </div>
           </div>
       </div>
    )
}
export default TodoItem