
export default function ButtonRoute() {
  return (
    <div className="flex justify-start font-semibold py-3">
      <a href="/resume" className="">
        <button
          className="outline outline-2 outline-primary rounded-sm bg-primary hover:bg-accentwhite text-base10 
                dark:hover:bg-accentblack hover:text-primary p-2"
        >
          Resume
        </button>
      </a>
      <a href="/project" className="ml-4 ease-in">
        <button
          className="outline-2 outline outline-secondary rounded-sm text-secondary hover:bg-secondary 
                hover:text-base10 p-2"
        >
          Projects
        </button>
      </a>
    </div>
  );
}
