import React, {useState} from 'react';
import { Api } from "./api";
import logo from './logo.svg';
import './App.css';
import CreateComment from './components/CreateComment';
import CommentList from './components/CommentList';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

export default function App() {
  const [comments, setComments] = useState([]);
  Api.get('http://localhost:3000/getComments').then(data => {
    setComments(data);  
  });

  return (
    <div className="appWrapper">
      <CreateComment />
      <CommentList comments={comments} />
    </div>
  )
}
