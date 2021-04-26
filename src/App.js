import './App.scss';
import Navbar from './components/layout/navbar';
import Students from './components/students/students';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Student from './components/students/student';
import StudentForm from './components/students/studentForm';
import { Provider } from 'react-redux'
import store, { rrfProps } from './store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import Login from './components/pages/login';
import PrivateRoute from './components/routes/privateRoute';
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter basename="/student-info">
          <div className="App">
            <PrivateRoute component={Navbar} />

            <Switch>
              <Route exact path='/' component={Students} />
              <Route exact path='/student/:id' component={Student} />
              <Route exact path='/studentForm/:id?' component={StudentForm} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>

  );
}

export default App;
