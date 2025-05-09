import React from "react";

// Array declared outside the component
const data = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: "$29",
    features: [
      "Individual configuration",
      "No setup, or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
    ],
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    features: [
      "All Starter features",
      "Advanced analytics",
      "Team size: up to 10 developers",
      "Premium support: 24 months",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    features: [
      "All Company features",
      "Unlimited developers",
      "Custom permissions",
      "Dedicated support",
    ],
  },
];

function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {data.map((val, index) => (
            <div
              key={index}
              className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{val.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {val.description}
              </p>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {val.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {val.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
