import { CheckIcon } from 'lucide-react';
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';

export default function Welcome() {
  return (
    <MaxWidthWrapper>
      <div className="py-6 sm:py-16 text-center">
        <div className="flex justify-center mb-4">
          <CheckIcon className="text-red-600 w-12 h-12" />
        </div>
        <h2 className="text-xl font-semibold mb-4">Choose your plan.</h2>

        <div className="text-gray-500 space-y-2">
          <p>✔️ You won’t be charged until after your free month.</p>
          <p>✔️ We’ll remind you three days before your trial ends.</p>
          <p>✔️ No commitments, cancel anytime.</p>
        </div>

        <button className="mt-6 bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition">
          See the Plans
        </button>
      </div>
    </MaxWidthWrapper>
  );
}
