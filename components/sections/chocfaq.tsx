import React from 'react';
import Link from 'next/link';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, value }) => {
  return (
    <Accordion.Item value={value} className="border-b border-gray-200 dark:border-gray-700">
      <Accordion.Header className="flex">
        <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all  [&[data-state=open]>svg]:rotate-180">
          {question}
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all">
        <div className="pb-4 pt-0">{answer}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

const FAQComponent: React.FC = () => {
  const faqs = [
    {
      question: "What are the security measures in place?",
      answer: "Our platform uses SSL encryption and complies with PCI DSS standards to secure your data. We regularly update our security protocols and conduct thorough audits to ensure that your information is protected against unauthorized access and data breaches.",
      value: "item-1"
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Our platform ensures secure processing of your payments and supports a variety of currencies to accommodate global customers.",
      value: "item-2"
    },
    {
      question: "Can I change my subscription plan at any time?",
      answer: "Yes, you can upgrade or downgrade your subscription plan at any time from your account settings. Our flexible subscription options allow you to choose the plan that best fits your needs.",
      value: "item-3"
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes, we provide 24/7 technical support for all our customers. Our dedicated support team is available to help you with any technical issues you may encounter.",
      value: "item-4"
    },
    {
      question: "How do I cancel my account?",
      answer: "You can cancel your account through your account settings or by contacting customer support. Our customer support team is available to assist you with the cancellation process.",
      value: "item-5"
    }
  ];

  return (
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.value} question={faq.question} answer={faq.answer} value={faq.value} />
          ))}
        </Accordion.Root>
        
      </div>
    </div>
  );
};

export default FAQComponent;