import Button from "@/components/Button";
import InstagramIconColor from "@/components/Icons/InstagramIconColor";
import LinkedInIconColor from "@/components/Icons/LinkedInIconColor";
import XIconColor from "@/components/Icons/XIconColor";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Column - Content */}
        <div>
          <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">Let's [ ] together!</h1>

          <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Hits</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Living in:</strong> Queens with two cats, Sazerac and Whiskeyjack
              </li>
              <li>
                <strong>Reading:</strong> Parking and urban environment topics
              </li>
              <li>
                <strong>Passions:</strong> creative elegance, urban agriculture, themed dinners
              </li>
              <li>
                <strong>Fun fact:</strong> Self-proclaimed accident-prone
              </li>
              <li>
                <strong>Current hobby:</strong> getting far too into crocheting and knitting projects
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <Button>Get in touch</Button>
          </div>

          <div className="flex gap-6">
            <a href="https://instagram.com/aroyalfrush" target="_blank" rel="noopener noreferrer" title="Instagram">
              <InstagramIconColor className="h-8 w-8 transition-opacity hover:opacity-80" />
            </a>
            <a href="https://linkedin.com/in/suzannefrush" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedInIconColor className="h-8 w-8 transition-opacity hover:opacity-80" />
            </a>
            <a href="https://twitter.com/spfrush" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
              <XIconColor className="h-8 w-8 transition-opacity hover:opacity-80" />
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div>
          <Image src="/suzanne-halftone.webp" alt="Suzanne Frush" width={600} height={800} className="h-auto w-full" priority />
        </div>
      </div>
    </div>
  );
}
