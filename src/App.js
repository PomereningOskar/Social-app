import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';
import PopUp from './views/PopUp';



function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  axios.defaults.headers.common['Authorization'] = "Bearer " + (user ? user.jwt_token : "");

  return (
    <div className="App">
      <PopUp setUser={setUser} />
      <AppNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;

