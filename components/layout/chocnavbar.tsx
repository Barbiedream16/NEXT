import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-4 shadow-sm bg-background">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">
            Choc
          </a>
        </div>
        <NavigationMenu.Root className="hidden md:flex">
          <NavigationMenu.List className="flex space-x-4">
            {['Features', 'Pricing', 'Blog', 'Company', 'Sign in'].map((item) => (
              <NavigationMenu.Item key={item}>
                <NavigationMenu.Link 
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md",
                    "text-foreground/60 hover:text-foreground",
                    "transition-colors"
                  )}
                  href="#"
                >
                  {item}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <button className="hidden md:block px-4 py-2 text-sm font-medium text-black bg-primary rounded-md hover:bg-primary/90">
          Login
        </button>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="p-2 md:hidden" aria-label="Open menu">
              <HamburgerMenuIcon className="w-6 h-6" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-y-0 right-0 w-full max-w-sm p-6 bg-background shadow-lg">
              <div className="flex flex-col h-full">
                <div className="flex justify-end">
                  <Dialog.Close asChild>
                    <button className="p-2" aria-label="Close menu">
                      <Cross1Icon className="w-6 h-6" />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="flex flex-col mt-8 space-y-4">
                  {['Features', 'Pricing', 'Blog', 'Company', 'Sign in'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="px-4 py-2 text-lg font-medium text-foreground/60 hover:text-foreground"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <button className="mt-auto px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
                  Get Started
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
};

export default Header;