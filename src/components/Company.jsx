function Company({ image, name, description, link }) {
  return (
    <div className="max-w-xs w-full flex flex-col  drop-shadow-lg rounded-md shadow-sm bg-DarkBrown dark:border-black overflow-hidden transition-transform duration-800 hover:-translate-y-3 hover:brightness-98">
      <img
        src={image}
        alt={`${name} visual`}
        className="w-full h-40 object-cover brightness-95 select-none"
        draggable="false"
      />
      <div className="flex flex-col flex-1 p-4 transition duration-500 brightness-100">
        <h5 className="text-lg font-bold text-white mb-1">
          {name}
        </h5>
        <p className="text-sm text-white mb-3">
          {description}
        </p>
<div className="mt-auto">
<a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded focus:ring-2 focus:outline-none dark:bg-LightBrown hover:bg-[#927a6b]"
        >
          Link
          <svg
            className="rtl:rotate-180 w-3 h-3 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
</div>
      </div>
    </div>
  );
}

export default Company;
