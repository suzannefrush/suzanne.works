"use client";

import { Share2 } from "lucide-react";

export default function ShareButton() {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm hover:bg-accent transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Share this trip
    </button>
  );
}
