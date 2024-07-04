import dynamic from 'next/dynamic';
import React from 'react';
import Countdown from '@modules/countdown/countdown';
import NewsletterForm from '@modules/newsletter/newsletter';


const App: React.FC = () => {
    const targetDate = new Date('2024-12-31T00:00:00');
    
    return (
      <div className="h-screen justify-center items-center bg-stone-900 bg-[url('https://i.ibb.co/TMqH6Cy/Desktop-5.png')]">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="text-white font-extralight tracking-widest text-4xl mb-4">01 - Inauguration</div> {/* Text above */}
          <div className="flex flex-col justify-center items-center">
            <div className="w-11/12 border-t border-2 border-stone-600 mb-4"></div> {/* Line above */}
            <Countdown />
            <div className="w-11/12 border-t border-2 border-stone-600 mt-4"></div> {/* Line below */}
          </div>
          <div className="text-white font-extralight tracking-widest text-xl mt-4">Days : Hours : Minutes : Seconds</div> {/* Text above */}
          <NewsletterForm/>
        </div>
      </div>

    );
  };
  
  export default App;