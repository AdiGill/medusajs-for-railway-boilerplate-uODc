"use client"
import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitting email:', email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
    <div className='sm:pt-56 pb-8 text-white font-light tracking-widest text-xl pt-20 '>Sign up for updates/news</div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        className="border border-dashed border-stone-500 text-center bg-stone-900 p-2 text-stone-300 rounded-lg focus:outline-none focus:border-red-400 w-full"
        required
      />
      
        <button type="submit" className="border-white bg-transparent bg-stone-800 hover:bg-stone-600 text-stone-300 hover:text-white font-bold py-2 mt-4 px-4 rounded-md transition duration-300 transform hover:scale-105">
            Subscribe
        </button>
    </form>
    </>
  );
};

export default NewsletterForm;
