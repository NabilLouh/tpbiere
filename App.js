
import './App.css';
import ListBiere from './ListBiere';
import Beer from './Beer';
import Header from './Header';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header />
      <Link to="/biere/1/buzz"></Link>
      


      <Outlet />
      
    </div>
  );
}

export default App;
