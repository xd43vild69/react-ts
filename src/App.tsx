import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { Manager } from './Components/Todo/Manager'
import Header from './Components/Page/Header'
import {About} from './Components/Page/About'

export interface IData {
  main: string;
}

const App: FC = () => {

  const [tasks, setTasks] = useState<IData>();

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTask();
  } ,[])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/main");
    const data:IData = await res.json();
    return data;
  }

  return (
    < div className="App" >
      <header className="App-header">
        <h1>React with TS</h1>
      </header>
      {/* <Manager></Manager> */}
      <Header data={tasks}></Header>
      <About data={tasks}></About>
    </div >
  );
}

export default App;
