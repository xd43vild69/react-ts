import React, { FC, useEffect, useState } from 'react';
import './App.css';
// import { Manager } from './Components/Todo/Manager'
import Header from './Components/Page/Header'
import { About } from './Components/Page/About'
import { Resume } from './Components/Page/Resume';
import { Portafolio } from './Components/Page/Portafolio';
import { Contact } from './Components/Page/Contact';
import { Footer } from './Components/Page/Footer';
export interface IData {
  main: string;
}

const App: FC = () => {

  const [data, setData] = useState<IData>();
  const [resume, setResume] = useState<IData>();
  const [portafolio, setPortafolio] = useState<IData>();

  useEffect(() => {
    const getTask = async () => {
      const dataFromServer = await fetchData();
      setData(dataFromServer);
      const resumeFromServer = await fetchDataResume();
      setResume(resumeFromServer);
      const portafolioFromServer = await fetchDataPortafolio();
      setPortafolio(portafolioFromServer);
    }
    getTask();
  }, [])

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/main`);
    const data: IData = await res.json();
    return data;
  }

  const fetchDataResume = async () => {
    const res = await fetch(`http://localhost:3000/resume`);
    const data: IData = await res.json();
    return data;
  }

  const fetchDataPortafolio = async () => {
    const res = await fetch(`http://localhost:3000/portfolio`);
    const data: IData = await res.json();
    return data;
  }

  return (
    < div className="App" >
      {/* <Manager></Manager> */}
      <Header data={data}></Header>
      <About data={data} ></About>
      <Resume data={resume} />
       <Portafolio data={portafolio} />
      <Contact data={data} />
      <Footer data={data} /> 
    </div >
  );
}

export default App;
