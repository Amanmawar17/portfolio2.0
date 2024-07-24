"use client";

import Link from "next/link";

export default function ButtonRoute() {

  return (
    <div className="flex justify-start font-semibold py-3">
      <Link
        href="/resume"
        className="outline outline-2 outline-primary rounded-radius bg-primary text-background dark:text-foreground hover:bg-background 
                hover:text-primary p-2"
      >
        Resume
      </Link>
      <Link
        href="/project"
        className="outline-2 outline outline-secondary rounded-radius text-secondary hover:bg-secondary 
                hover:text-background dark:hover:text-foreground p-2 ml-6"
      >
        Projects
      </Link>
    </div>
  );
}
