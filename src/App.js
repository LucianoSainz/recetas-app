import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/pages/ui/navbar/Navbar';
import IndexPage from './components/pages/index/IndexPage';
import FoodsIndex from './components/pages/foods-index/FoodsIndex';


import {Switch, Route} from 'react-router-dom';




const App = () => {
  return (
    <>

      <Navbar />

      <Switch>
         <Route path="/" exact component={IndexPage} />
         <Route path="/alimentos" exact component={FoodsPage} />
      </Switch>

    </>
  )
}

export default App;
