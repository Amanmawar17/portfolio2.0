"use client";

import Link from "next/link";

export default function ButtonRoute() {

  return (
    <div className="flex justify-start font-semibold mt-4 gap-6">
      <button 
        className="outline outline-2 outline-primary rounded-radius bg-primary text-background dark:text-foreground hover:bg-background 
                hover:text-primary px-4 py-2 text-lg">

      <Link
        href="/resume"
        >
        Resume
      </Link>
        </button>
        <button 
        className="outline-2 outline outline-secondary rounded-radius text-secondary hover:bg-secondary 
        hover:text-background dark:hover:text-foreground px-4 py-2 text-lg"
        >
      <Link
        href="/project"
        >
        Projects
      </Link>
        </button>
    </div>
  );
}
