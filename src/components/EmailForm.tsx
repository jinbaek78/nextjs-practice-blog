'use client';

import { useState } from 'react';

type Props = {};
export default function EmailForm({}: Props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="mb-4 font-semibold ">Or Send me an email</h2>
      {/* <p className=" bg-green-200 mb-2 text-center px-2 py-1 text-sm">
        ✅The email has been successfully sent
      </p>
      <p className=" bg-red-300 mb-2 px-2 py-1 text-center text-sm">
        🔥The email delivery failed. Please try again!
      </p> */}
      <div className=" w-1/3">
        <form className="p-2  bg-gray-700 text-white text-xs flex flex-col rounded-md">
          <label className="m-1" htmlFor="email">
            Your Email
          </label>
          <input
            className="m-1 outline-neutral-500 text-black px-1"
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="m-1" htmlFor="subject">
            Subject
          </label>
          <input
            className="m-1 outline-neutral-500 text-black px-1"
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <label className="m-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="h-32 m-1 outline-neutral-500 text-black px-1 cur"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="bg-yellow-300 text-black m-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
