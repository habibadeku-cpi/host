import React from 'react';
import './App.css';
import Header from './components/main-header/main-header';
import AppsContainer from './components/apps-container/apps-container';

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main-section'>
        <AppsContainer></AppsContainer>
      </section>
    </div>
  );
}

export default App;
