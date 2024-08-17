import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export interface HyperNewsletterProps {
  theme?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large';
  label: string;
}

const HyperNewsletter: React.FC<HyperNewsletterProps> = ({
  theme = 'light',
  size = 'medium',
  label,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Thank You!</h2>
          <p className="mt-4 text-[var(--color-text)]">
            We've sent a confirmation email to {email}. Please check your inbox to complete the subscription process.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <strong className="block text-center text-xl font-bold text-[var(--color-text)] sm:text-3xl">
          Want us to email you with the latest blockbuster news?
        </strong>

        <div className="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-md border-[var(--color-secondary)] bg-[var(--color-background)] p-3 shadow-sm transition focus:border-[var(--color-primary)] focus:outline-none focus:ring focus:ring-[var(--color-primary)] text-[var(--color-text)]"
              />
            </div>
            <Button
              type="submit"
              className={`group mt-4 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 transition focus:outline-none focus:ring focus:ring-[var(--color-primary)] sm:mt-0 sm:w-auto storybook-button--${size}`}
              style={{ 
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)'
              }}
            >
              <span className="text-sm font-medium">{label}</span>
              <Icons.arrowRight className="size-5 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HyperNewsletter;