import Link from 'next/link';

interface AnnouncementBannerProps {
  message: string;
  linkText: string;
  linkUrl: string;
  isExternal?: boolean;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ 
  message, 
  linkText, 
  linkUrl, 
  isExternal = false 
}) => {

  return (
    <div className="bg-indigo-600 px-4 py-3 text-white">
      <p className="text-center text-sm font-medium">
        {message}
        <Link
          href={linkUrl} 
          className="inline-block underline ml-1"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default AnnouncementBanner;

// Usage example:
// <AnnouncementBanner 
//   message="Love Next.js?" 
//   linkText="Check out this new course!" 
//   linkUrl="/courses/nextjs" 
// />
// 
// For external links:
// <AnnouncementBanner 
//   message="Love Next.js?" 
//   linkText="Check out this new course!" 
//   linkUrl="https://example.com/course" 
//   isExternal={true}
// />