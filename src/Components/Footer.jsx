import React from "react";
import Signature from "./Signature";

const data = [
  {
    title: "Company",
    links: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    title: "Help center",
    links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Licensing", "Terms"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    title: "Download",
    links: ["iOS", "Android", "Windows", "MacOS"],
  },
];

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {data.map((val, index) => (
            <div key={index}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {val.title}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                {val.links.map((link, index) => (
                  <li className="mb-4" key={index}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Signature />
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
