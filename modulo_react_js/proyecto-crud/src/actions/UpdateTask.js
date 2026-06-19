import axios from 'axios';

export const UpdateTask = async (obej) =>{
    const update = await axios.put(`https://todos-go.herokuapp.com/api/todos/${obej.key}`, obej.checked).then(res => res).catch(err => err)
    return update
}
