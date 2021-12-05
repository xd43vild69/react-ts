import React from 'react'
import { ITask } from './Interfaces/ITask'

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}


export const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskname}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => {
                completeTask(task.taskname);
            }}>X</button>
        </div>
    )
}
