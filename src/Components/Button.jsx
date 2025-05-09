import React from "react";

function Button() {
  return (
    <div className="flex items-center lg:order-2">
      <a
        href="#"
        target="_blank"
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
      >
        Download
      </a>
    </div>
  );
}

export default Button;
