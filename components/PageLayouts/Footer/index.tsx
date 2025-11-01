import InstagramIcon from "@/components/Icons/InstagramIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-300 py-6 dark:border-gray-700">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright Notice */}
            <p className="text-sm text-gray-600 dark:text-gray-400">Copyright © {new Date().getFullYear()} Suzanne Frush | Product + Parties - All Rights Reserved.</p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/aroyalfrush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/suzannefrush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
