
import './App.css';
import ListBiere from './ListBiere';
import Beer from './Beer';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">


      <ListBiere />


      <Outlet />
      
    </div>
  );
}

export default App;
