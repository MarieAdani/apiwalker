import logo from './logo.svg';
import './App.css';
import  Form from "./componentes/Form";
import { Route, Routes } from 'react-router-dom';
import People from './componentes/People';
import Planets from './componentes/Planets';

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Routes>
        <Route path="/people/:id" element={<People></People>}></Route>
        <Route path='/planets/:id' element={<Planets></Planets>}></Route>
      </Routes>
    </div>
  );
}

export default App;
