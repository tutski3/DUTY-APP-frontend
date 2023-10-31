import React from 'react';
import DutyList from './components/DutyList';
import DutyForm from './components/DutyForm';

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>DUTIES</h1>
      <DutyList />
      <DutyForm />
    </div>
  );
};

export default App;
