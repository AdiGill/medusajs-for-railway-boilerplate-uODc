import dynamic from 'next/dynamic';
import React from 'react';
import Countdown from '@modules/countdown/countdown';


const App: React.FC = () => {
    const targetDate = new Date('2024-12-31T00:00:00');
    
    return (
      <div>
        <h1>Countdown to {targetDate.toLocaleString()}</h1>
        <Countdown/>
      </div>
    );
  };
  
  export default App;