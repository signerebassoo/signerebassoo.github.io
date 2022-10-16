import React from 'react';
import './App.css';
import Home from './HomePage/Home';
import NavBar from './NavBar/NavBar';

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
