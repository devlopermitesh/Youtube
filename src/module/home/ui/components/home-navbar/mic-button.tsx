"use client";

import { Mic } from "lucide-react";

const MicButton = () => {
  return (
    <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-background/40 border border-border shadow-md">
      <button
        className="flex h-full w-full rounded-full items-center justify-center text-foreground outline-none focus-visible:ring-2 ring-accent ring-offset-0 transition-all cursor-pointer"
      >
        <Mic size={20} className="text-foreground" />
      </button>
    </div>
  );
};

export default MicButton;
