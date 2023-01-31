import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar-component/Navbar';
import Home from './components/home-page/home-page.component';
import Contacts from './routes/contacts/contacts.component';
// import LogIn from './routes/log-in/log-in.component';
import SignUpForm from './components/sign-up/sign-up-form.component';

import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/home' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='log-in' element={<SignUpForm />} /> 
      </Route>
    </Routes>
    </>
  )
}

export default App;
