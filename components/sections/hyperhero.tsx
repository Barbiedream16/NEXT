import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="text-white">
      <AspectRatio.Root ratio={16 / 9}>
        <div className="mx-auto max-w-screen-xl px-4 py-0 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
              numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                className="bg-blue-600 text-white hover:bg-transparent hover:text-white"
                size="lg"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="text-white border-blue-600 hover:bg-blue-600"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </AspectRatio.Root>
    </section>
  );
};

export default HeroSection;