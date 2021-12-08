import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { Manager } from './Components/Todo/Manager'
import Header from './Components/Page/Header'
import { About } from './Components/Page/About'
import { Resume } from './Components/Page/Resume';
export interface IData {
  main: string;
}

const App: FC = () => {

  const [data, setData] = useState<IData>();
  const [resource, setResource] = useState<string>("main");

  useEffect(() => {
    const getTask = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
    }
    getTask();
  }, [])

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/${resource}`);
    const data: IData = await res.json();
    return data;
  }

  return (
    < div className="App" >
      <header className="App-header">
        <h1>React with TS</h1>
      </header>
      {/* <Manager></Manager> */}
      <Header data={data}></Header>
      <About data={data} ></About>
      {/* <Resume data={data} /> */}
      {/* <Portfolio data={this.state.resumeData.portfolio} />
      <Contact data={this.state.resumeData.main} />
      <Footer data={this.state.resumeData.main} /> */}
    </div >
  );
}

export default App;
