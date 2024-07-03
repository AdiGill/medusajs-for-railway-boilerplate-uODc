// components/CountdownTimer.tsx
"use client"
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg">
      <span className="text-4xl font-semi-bold tracking-widest text-white pb-8">
        01 - Inauguration
      </span>
      <div className="w-full border-t border-white"></div>
      <div className="text-4xl font-medium text-white my-2 py-10 text-center">
        {Object.keys(timeLeft).length ? (
          Object.keys(timeLeft).map(interval => (
            <span key={interval} className="mx-1">
              {timeLeft[interval]} {interval}{' '}
            </span>
          ))
        ) : (
          <span>Time's up!</span>
        )}
      </div>
      <div className="w-full border-t border-white"></div>
    </div>
  );
};

export default CountdownTimer;
