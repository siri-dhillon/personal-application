import './App.css';
import {Navbar} from './Components/Navigation'
import { Route, Switch } from 'react-router-dom';

// import components
import Blog from './Components/Blog';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
       <>          
          <Navigation /> 
          <Switch>  
            <Route exact path='/' component={Home}/>              
            <Route path='/home' component={Home}/>  
            <Route path='/skills' component={Skills}/>               
            <Route path='/projects' component={Projects}/> 
            <Route path='/blog' component={Blog}/>             
          </Switch>
    </>
    </div>
  );
}

export default App;
