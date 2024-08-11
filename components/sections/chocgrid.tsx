import React from 'react';
import { Icons } from "@/components/shared/icons";

interface FeatureProps {
  title: string;
  icon: keyof typeof Icons;
  children: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, icon, children }) => {
  const Icon = Icons[icon];

  return (
    <div>
      <div className="mb-4">
        <Icon className="w-12 h-12 text-brand-700 dark:text-brand-400" />
      </div>
      <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
};

const Grid: React.FC = () => {
  return (
    <div className=" p-10 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 lg:px-16 xl:px-24 py-20 mx-auto shadow-xl">
        <Feature
          title="Unify your payments stack"
          icon="heart"
        >
          Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing.
        </Feature>

        <Feature
          title="Own your in-store experience"
          icon="beaker"
        >
          Provide a seamless customer experience across channels, like reserving online and picking up in store. Our SDKs make it easy to integrate into your own mobile and web applications to accept in-store payments.
        </Feature>

        <Feature
          title="Grow your platform's revenue"
          icon="arrowUpRight"
        >
          Add in-person payments to your platform or marketplace. Using Terminal with Connect, you can onboard users for online and in-person payments, and unify their payouts across channels.
        </Feature>
      </div>
    </div>
  );
};

export default Grid;