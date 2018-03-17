import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.component';
import FetchPage from './fetch-page.component';


export default function main() {
  return (
    <Switch>
        <Route exact path='/' render={Home}/>
        <Route path='/fetch' render={FetchPage}/>
    </Switch>
  );
}

