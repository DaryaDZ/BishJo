import React from 'react';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Layout from './page/Layout';
import Home from './page/Home'
function App() {
  return (
      // <div style={{ backgroundColor:"#283148"}}>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
