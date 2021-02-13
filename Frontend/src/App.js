import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Update from './views/Update';
import React from 'react';
import AuthorList from './components/AuthorList';
function App() {
  return (
    <div className="App">
      <Router>
        <AuthorList path="/"/>
        <Main path="/new"/>
        <Update path="author/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
