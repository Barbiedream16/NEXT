'use client';

import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons";

const Newsletter: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
          Want us to email you with the latest blockbuster news?
        </strong>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <Input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <Button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium">Sign Up</span>
              <Icons.arrowRight className="size-5 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;