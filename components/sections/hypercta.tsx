import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="overflow-hidden  sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.
          </p>
          <div className="mt-4 md:mt-8">
            <Link href="#">
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-56 w-full sm:h-full">
        <Image
          alt="CTA Image"
          className="dark:opacity-85 dark:invert"
          src="/_static/blog/blog-post-5.webp"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default CTASection;