import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import First from '../pages/First';

export default function Routes(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/'>
        <First/> </Route>
      
      
      </Switch>
    </BrowserRouter>
    </div>
  )
}