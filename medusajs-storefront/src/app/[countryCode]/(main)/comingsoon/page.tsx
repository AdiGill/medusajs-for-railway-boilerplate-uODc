import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import CountdownTimer without SSR
const CountdownTimer = dynamic(() => import('@modules/countdown/countdown'), { ssr: false });

const CountdownPage: React.FC = () => {
  const saleEndDate = '2024-07-20T00:00:00';
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-stone-900 bg-[url('https://i.ibb.co/TMqH6Cy/Desktop-5.png')]">
      <CountdownTimer targetDate={saleEndDate} />
    </div>
  );
};

export default CountdownPage;
