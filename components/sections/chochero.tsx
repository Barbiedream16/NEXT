import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const FeatureSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
      <div className="absolute inset-0 bg-primary/25 -z-10" aria-hidden="true" />
      <div className="flex flex-col items-start justify-center px-4 lg:px-20 py-24">
        <Badge variant="secondary" className="mb-3">
          Pre Beta
        </Badge>
        <h1 className="mb-6 text-4xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-gray-300 leading-tight">
          Great customer relationships start here.
        </h1>
        <form className="w-full mb-6">
          <label className="sr-only" htmlFor="email">Your Email</label>
          <div className="block lg:hidden">
            <Input
              id="email-mobile"
              type="email"
              placeholder="Enter your email..."
              className="bg-white text-primary-900 mb-2"
            />
            <Button type="submit" className="w-full">
              Get Started
            </Button>
          </div>
          <div className="hidden lg:flex">
            <div className="relative flex-grow">
              <Input
                id="email-desktop"
                type="email"
                placeholder="Enter your email..."
                className="bg-white text-primary-900 pr-32"
              />
              <div className="absolute inset-y-0 right-0">
                <Button type="submit" className="h-full rounded-l-none">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </form>
        <p className="pr-0 lg:pr-16 mb-4 text-sm text-primary-600 dark:text-gray-400 tracking-wider">
          Get the #1 Business Messenger and start delivering personalized
          experiences at every stage of the customer journey.
        </p>
      </div>
      <AspectRatio.Root ratio={16/9} className="h-64 md:h-full">
        <img
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="3 women looking at a laptop"
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </AspectRatio.Root>
    </div>
  );
};

export default FeatureSection;