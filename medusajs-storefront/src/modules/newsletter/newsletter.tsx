"use client";
import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTgzMGI2ZjNkYmZjYzNlNTJiNGZhMTZiYzdlNDg5YjYwZmVlNDg5NzQzMTVjZTgwNjNkZmQwNDgxZTIxZDAzYjk5NDIxNGM2MzM5YWU2YWUiLCJpYXQiOiIxNzIwMDc3MTU4LjEwOTY4MSIsIm5iZiI6IjE3MjAwNzcxNTguMTA5Njg1IiwiZXhwIjoiNDg3MzY3NzE1OC4xMDY5ODQiLCJzdWIiOiI4OTA4MjEiLCJzY29wZXMiOltdfQ.UP8hrBChCN1XArRzNKVHSz1mJ7ny9DBr48Mu6YbZvHOZL4VySYpIF7j2POxWhiiTudntlhJwlMB59bJmSX7_PQ';
    const url = `https://api.sender.net/v2/subscribers`;

    const headers = {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    const data = {
      "email": email,
      "firstname": firstName,
      "lastname": lastName,
      "groups": ["e0X23G"], // Adjust with the desired groups or remove if not needed
      "fields": {}, // Adjust with custom fields if necessary
      "phone": "", // Adjust with phone number if necessary
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('Successfully subscribed!');
      } else {
        const errorData = await response.json();
        setStatus(`Error subscribing: ${errorData.message}`);
      }
    } catch (error) {
      setStatus('Error subscribing. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="sm:pt-56 pb-8 text-white font-light tracking-widest text-xl pt-20">
        Sign up for updates/news
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input 
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-dashed border-stone-500 text-center bg-stone-900 p-2 text-stone-300 rounded-lg focus:outline-none focus:border-red-400 w-full mb-4"
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-dashed border-stone-500 text-center bg-stone-900 p-2 text-stone-300 rounded-lg focus:outline-none focus:border-red-400 w-full mb-4"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-dashed border-stone-500 text-center bg-stone-900 p-2 text-stone-300 rounded-lg focus:outline-none focus:border-red-400 w-full mb-4"
          required
        />
        
        <button
          type="submit"
          className="border-white bg-stone-800 hover:bg-stone-600 text-stone-300 hover:text-white font-bold py-2 mt-4 px-4 rounded-md transition duration-300 transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
      {status && <div className="mt-4 text-red-300">{status}</div>}
    </>
  );
};

export default NewsletterForm;
