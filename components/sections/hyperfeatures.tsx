import React from 'react';
import { HeaderSection } from "@/components/shared/header-section";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Button } from "@/components/ui/button"

interface FeatureProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description }) => (
  <a
    className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
    href="#"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-10 text-pink-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>

    <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

    <p className="mt-1 text-sm text-gray-300">{description}</p>
  </a>
);

const Hyperfeatures: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Digital campaigns",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium."
    },
    {
      title: "E-Commerce solutions",
      description: "Leverage our cutting-edge e-commerce platforms to boost your online sales and streamline your business operations."
    },
    {
      title: "Social media management",
      description: "Enhance your brand presence across all major social platforms with our expert social media management services."
    },
    {
      title: "SEO optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website with our proven SEO strategies."
    },
    {
      title: "Content creation",
      description: "Engage your audience with compelling, high-quality content tailored to your brand voice and marketing goals."
    },
    {
      title: "Analytics and reporting",
      description: "Make data-driven decisions with our comprehensive analytics and reporting tools, providing actionable insights."
    }
  ];

  return (


        <section>
      <div className="pb-6 pt-28">
        <MaxWidthWrapper>
          <HeaderSection
            label="Features"
            title="Discover all features."
            subtitle="Harum quae dolore inventore repudiandae? orrupti aut temporibus
          ariatur."
          />

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 focus:ring-yellow-400"
          >
            Get Started Today
          </Button>
        </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Hyperfeatures;