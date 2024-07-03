"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState<string>('');

  // Set the date we're counting down to
  const countDownDate = new Date('Nov 2, 2024 13:43:00').getTime();
  
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
      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      
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
    <div className="countdown">
      <p id="demo">{countdown}</p>
    </div>
  );
};

export default CountdownTimer;
