import './App.scss';
import Navbar from './components/layout/navbar';
import Students from './components/students/students';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Student from './components/students/student';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Students} />
          <Route exact path='/student/:id' component={Student} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
