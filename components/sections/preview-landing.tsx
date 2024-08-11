import Image from "next/image";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="rounded-xl  md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <Image
              className="w-full h-full object-contain object-center" // Use object-contain instead of object-cover
              src="/_static/blog/rocket-launch2.png"
              alt="preview landing"
              layout="fill" // Ensure the image fills the container
              priority={true}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
