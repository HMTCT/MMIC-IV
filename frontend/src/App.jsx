import React from 'react';
import Header from './patient/Header';
import PatientTable from './patient/PatientTable';
import './index.css';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#DAECFA', minHeight: '100vh' }}>
      <Header />
      <main className="container mx-auto p-4">
        <PatientTable />
      </main>
    </div>
  );
}

export default App;
