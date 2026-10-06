"use client";

import { useState } from "react";

export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-htr-blue">Signed in</p>
        <p className="mt-2 text-gray-600">Account functionality is not enabled in this preview.</p>
      </div>
    );
  }
  return (
    <form
      className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="block text-sm font-semibold text-gray-700">
        Username or email address <span className="text-red-500">*</span>
        <input required type="text" className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-htr-blue" />
      </label>
      <label className="block text-sm font-semibold text-gray-700">
        Password <span className="text-red-500">*</span>
        <input required type="password" className="mt-1 w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-htr-blue" />
      </label>
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" /> Remember me
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-htr-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-htr-blue-dark"
      >
        Log in
      </button>
      <p className="text-center text-sm">
        <a href="#" className="text-htr-blue hover:underline">Lost your password?</a>
      </p>
    </form>
  );
}
