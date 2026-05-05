import { useState } from "react";

function TodoList () {
    const [task, setTask]  = useState("");
    const [list, setList] = useState([]);

    const addTask = () => {
        setList([...list, task]);
        setTask("");
    }

    return(
        <>
            <input 
            type="text"
            placeholder="Add your todos"
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            />
            <button onClick={addTask}>Add task</button>

            <ul>
                {list.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList;