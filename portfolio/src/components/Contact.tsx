"use client";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("mldrzbja");

  if (state.succeeded) {
    return <p className="text-green-600 font-bold">Thank you for reaching out! I&apos;ll get back to you as soon as possible.</p>;
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
        />
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
        />
      </div>
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
      <button
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500 disabled:opacity-50"
        type="submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
