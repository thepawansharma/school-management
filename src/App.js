import React from 'react';
import './App.css';
import { HashRouter as router, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Signin from './signin';
import Register from './register';
import Main from './main';
import Courses from './courses';
import Students from './students';
import Attendences from './attendences';
import Schedules from './schedules'
import $ from 'jquery';
import Fees from './fees';
import Holidays from './holidays';
import Transports from './transports';
import Notifications from './notifications';
import Rightbar from './rightbar';
import Gatepass from './gatepass';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<Main />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/students' element={<Students />} />
          <Route path='/attendences' element={<Attendences />} />
          <Route path='/schedules' element={<Schedules />} />
          <Route path='/fees' element={<Fees />} />
          <Route path='/holidays' element={<Holidays />} />
          <Route path='/transports' element={<Transports />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/rightbar' element={<Rightbar />} />
          <Route path='/gatepass' element={<Gatepass />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
