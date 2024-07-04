"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<string>('');

  // Set the date we're counting down to
  const countDownDate = new Date('Jul 20, 2024 00:00:00').getTime();
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Format the countdown string
      const countdownString = `${days} : ${hours} : ${minutes} : ${seconds}`;
      
      // Update state to trigger re-render
      setCountdown(countdownString);
      
      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown('EXPIRED');
        // Example: Redirect on expiration
        // window.location.href = logoutUrl;
      }
    }, 1000);
    
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
  <div className="flex flex-col justify-center items-center w-auto text-center">
    <div className="flex items-center w-full">
      <div className="flex-grow border-t border-2 border-gray-400"></div>
      <p className="text-white small:text-8xl text-3xl font-light tracking-widest whitespace-pre leading-loose mx-4 inline-block">{countdown}</p>
      <div className="flex-grow border-t border-2 border-gray-400"></div>
    </div>
  </div>
  </>


  );
};

export default CountdownTimer;
