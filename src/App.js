import {BrowserRouter} from "react-router-dom"
import './App.css';

import Links from './Links/Links';

function App() {
 
  return (
    <div className="App">
      
      <BrowserRouter>
      <Links/>
      </BrowserRouter>
    
  
    </div>
  );
}

export default App;
