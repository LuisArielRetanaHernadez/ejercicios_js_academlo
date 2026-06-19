import TodoItem from "./TodoItem"
import axios from 'axios'
import { useState, useEffect } from "react"

const TodoContainer = () => {
    const [chores, setChores] = useState([])
    useEffect(() => {
        const getItemsChores = async () => {
            const response = await axios.get('https://todos-go.herokuapp.com/api/todos').then(resp => resp).catch(err => err)
            if(response){
                setChores(response.data.todos)
                console.log(response.data.todos)
            }
        }
        getItemsChores()
    },[])
    const listChores = chores.map((value,index,arr) => <TodoItem id={index} key={value.id} keyTask={value.id} task={value.task} nameStudent={value.student} isCompleted={value.isCompleted} arr={arr}></TodoItem>)
    return (
        <section className="container">
            <div className="row center flex-direction-column">
                <div className="col-11">
                    {listChores}
                </div>
            </div>
        </section>
    )
}
export default TodoContainer