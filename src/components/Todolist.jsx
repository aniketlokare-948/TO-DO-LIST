import React, { useState } from 'react';

const Todolist = () => {
    const [todos, setTodos] = useState([
        { task: "my first task", completed: false },
        { task: "my Second task", completed: true }
    ]);

    function handleSubmit(event) {
        event.preventDefault();
        const task = event.target.task.value;
        setTodos([...todos, { task: task, completed: false }]);
        event.target.reset();
    }

    function toggleComplete(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    function deleteTask(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <div className='container my-5'>
            <div className='mx-auto rounded border p-4' style={{ maxWidth: "600px", backgroundColor: "#08618d" }}>
                <h2 className='text-white text-center mb-4'>My ToDo List</h2>
                <form className="d-flex mb-3" onSubmit={handleSubmit}>
                    <input className="form-control me-2" placeholder="New task" name='task' />
                    <button className="btn btn-outline-light" type="submit">Add</button>
                </form>
                {todos.map((todo, index) => {
                    return (
                        <div key={index} className='rounded mb-3 p-3 d-flex align-items-center' style={{ backgroundColor: todo.completed ? "#87FC68" : "lightgray" }}>
                            <div className='flex-grow-1'>
                                {todo.task}
                            </div>
                            <div>
                                <i className={todo.completed ? "bi bi-check-square h4 me-2" : "bi bi-square h4 me-2"} onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}></i>
                                <i className="bi bi-trash text-danger h4" onClick={() => deleteTask(index)} style={{ cursor: "pointer" }}></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Todolist;
