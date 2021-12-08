import React from 'react';
import SearchPlane from './pages/SearchPlane/SearchPlane';
import ListPlane from './pages/ListPlane/ListPlane';
import { createBrowserHistory } from "history"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
        <Routes>
          <Route exact path="/" element={<SearchPlane />} />
          <Route exact path="/list" element={<ListPlane />} />
        </Routes>
    </Router>
  );
}

export default App;
