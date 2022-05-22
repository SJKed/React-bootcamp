import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponentsAndProps from './pages/ComponentsAndProps.jsx';
import Conditionals from './pages/Conditionals.jsx';
import Events from './pages/Events.jsx';
import Home from './pages/Home.jsx';
import Lifecycle from './pages/Lifecycle.jsx';
import Shakespear from './pages/Shakespear.jsx';
import Styling from './pages/Styling.jsx';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ComponentsAndProps" element={<ComponentsAndProps />} />
        <Route path="/conditionals" element={<Conditionals />} />
        <Route path="/events" element={<Events />} />
        <Route path="/lifecycle" element={<Lifecycle />} />
        <Route path="/shakespear" element={<Shakespear />} />
        <Route path="/styling" element={<Styling />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);