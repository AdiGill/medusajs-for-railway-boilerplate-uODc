"use client";

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if ((timeLeft as any)[interval]) {
      timerComponents.push(
        <span key={interval} className="mx-1">
          {(timeLeft as any)[interval]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-stonoe-900 rounded-lg">
        <span className='text-4xl font-semi-bold tracking-widest text-white pb-8'>
            01 - Inauguration
        </span>
      <div className="w-full border-t border-white"></div>
      <div className="text-4xl font-medium text-white my-2 py-10 text-center">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
      <div className="w-full border-t border-white"></div>
      {/* <a
          href="/store"
          className=" animate-pulse  text-large-thin leading-10 tracking-widest text-white font-thin hover:border-b border-radius-10 hover:pb-0 pt-8 text-center justify-center" style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.8)" }} >
            More Details→
          
        </a> */}
    </div>
  );
};

export default CountdownTimer;
