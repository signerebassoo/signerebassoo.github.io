import React from 'react';
import './App.css';
import Home from './components/HomePage/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className=' bg-white min-h-screen'>
      <header className='px-10'>
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
