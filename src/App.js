import logo from './logo.svg';
import './App.css';
import CardContainer from './Componants/CardContainer';
import { useEffect, useState } from 'react';

function App() {
  const [userData,setUserData] = useState([]);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUserData(data))
  },[])

  return (
    <div className="App">
     <CardContainer userData={userData} setUserData={setUserData}/>
    </div>
  );
}

export default App;
