import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/pages/ui/navbar/Navbar';
import IndexPage from './components/pages/index/IndexPage';


const App = () => {
  return (
    <>

      <Navbar />
      <IndexPage />

    </>
  )
}

export default App;
