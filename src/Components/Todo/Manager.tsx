import React, { FC, ChangeEvent, useState } from 'react'
import { TodoTask } from './TodoTask'
import { ITask } from './Interfaces/ITask'

export const Manager: FC = () => {

    const [taskname, setTask] = useState<string>("");
    const [deadline, setDeadLine] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleTaskChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        } else {
            setDeadLine(Number(event.target.value));
        }
    }

    const addTask = (): void => {
        const newTask = { taskname: taskname, deadline: deadline };
        setTodoList([...todoList, newTask]);
        setTask("");
        setDeadLine(0);
    }

    const completeTask = (taskNameToDelete: string):void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskname !== taskNameToDelete;
            })
        )
    }

    return (
        <div className="Header">
            <div className="header">
                <div className="inputContainer">
                    <input type="text" placeholder="Task..." name="task" value={taskname} onChange={handleTaskChange} />
                    <input type="number" placeholder="Deadline in days..." name="deadline" value={deadline} onChange={handleTaskChange} />
                    <button onClick={addTask}>Add Task</button>
                </div>
                <div className="todoList">
                    {todoList.map((task: ITask, key: number) => {
                        return <TodoTask key={key} task={task} completeTask={completeTask} />
                    })}
                </div>
            </div>
        </div>
    )
}
