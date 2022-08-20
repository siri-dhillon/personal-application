import './App.css';
import { BrowserRouter} from 'react-router-dom';

import Navigation from './Components/Navigation'

// import components

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>         
          
    </div>
    </BrowserRouter>
  );
}

export default App;
