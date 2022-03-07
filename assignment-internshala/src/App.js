import './App.css';
import './styles/bootstrap.min.css'
import Navbar from './components/Layout/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/Layout/HomePage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import About from './components/Layout/About';
import Contact from './components/Layout/Contact';
import setAuthToken from './utility/setAuthToken';
import AddEvent from './components/Event/AddEvent'
import {Provider} from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import { loadUser } from './action/auth';
import Events from './components/Event/Events';
import Dashboard from './components/Layout/Dashboard';
import { loadEvents } from './action/eventpost';
import Alert from './components/Layout/Alert';

// Checking for authenticated user token in local storage
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
  

function App() {
  
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadEvents());
  }, []);

  return (
    <Provider store={store}> 
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <div className="row mt-2">
            <div className="col-4"></div>
            <div className="col-4"><Alert/></div>
            <div className="col-4"></div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/addevent" element={<AddEvent/>}/>

        </Routes>
      </BrowserRouter>
    </>
    </Provider>
  );
}

export default App;
