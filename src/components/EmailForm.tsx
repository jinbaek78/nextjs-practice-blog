'use client';

import { FormEvent, useEffect, useState } from 'react';
import { sendEmail } from '../../service/email';

type Props = {};
export default function EmailForm({}: Props) {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failureMessage, setFailureMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail({
      email: { sender, message, subject },
      successCallback: setSuccessMessage,
      failureCallback: setFailureMessage,
    });
  };

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => setSuccessMessage(''), 5000);
      setMessage('');
      setSubject('');
      setSender('');
      return;
    }

    setTimeout(() => setFailureMessage(''), 6000);
  }, [successMessage, failureMessage]);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="mb-4 font-semibold ">Or Send me an email</h2>
      {successMessage && (
        <p className=" bg-green-200 mb-4 text-center px-2 py-1 text-sm">
          {successMessage}
        </p>
      )}
      {failureMessage && (
        <p className=" bg-red-300 mb-4 px-2 py-1 text-center text-sm">
          {failureMessage}
        </p>
      )}

      <div className=" w-1/3">
        <form
          className="p-2  bg-gray-700 text-white text-xs flex flex-col rounded-md"
          onSubmit={handleSubmit}
        >
          <label className="m-1" htmlFor="sender">
            Your Email
          </label>
          <input
            className="m-1 outline-neutral-500 text-black px-1"
            id="sender"
            type="text"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
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
