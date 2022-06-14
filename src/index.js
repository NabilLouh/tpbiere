import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Beer from './Beer'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useParams, useNavigate  } from 'react-router-dom';
import ListBiere from './ListBiere';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ListBiere />} />
        <Route path="/biere/:id/:name" element={<Beer />}/>

        
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// Le React Router en version 6 n'est plus compatible avec les classes.
// Si on n'utilise pas les hooks, on doit donc utiliser cette fonction.
export function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    let navigate = useNavigate();

    return <Component {...props} router={{ params, navigate }} />;
  }

  return ComponentWithRouter;
}









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
