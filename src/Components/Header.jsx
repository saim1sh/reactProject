import React from "react";
import Signature from "./Signature";
import Button from "./Button";

function Header() {
  const arr = ["Home", "Company", "Marketplace", "Features", "Team", "Contact"];
  return (
    <div className="fixed w-full">
      <div className="flex justify-between bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <Signature />
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {arr.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
