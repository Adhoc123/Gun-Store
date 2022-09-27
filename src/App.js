
import { useState } from 'react';
import './App.css';
import AllGun from './components/AllGun/AllGun';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [count,setCount] = useState(0);
  const increase = ()=>{
    setCount(count+1);
  }
  return (
    <div >
       <Navbar count={count}></Navbar>
       <AllGun increase={increase}></AllGun>
    </div>
  );
}

export default App;
