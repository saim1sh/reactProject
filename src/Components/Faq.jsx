import React from 'react';

const faqs = [
  {
    question: 'Can I use Landwind in open-source projects?',
    answer: [
      `Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.`,
      `Check out this guide to learn how to `,
      { linkText: 'get started', href: '#' },
      ` and start developing websites even faster with components on top of Tailwind CSS.`
    ]
  },
  {
    question: 'Is there a Figma file available?',
    answer: [
      `Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.`,
      `Check out the `,
      { linkText: 'Figma design system', href: '#' },
      ` based on the utility classes from Tailwind CSS and components from Landwind.`
    ]
  },
  {
    question: 'What are the differences between Landwind and Tailwind UI?',
    answer: [
      `The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.`,
      `However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.`,
      `Learn more about these technologies:`,
      [
        { linkText: 'Landwind Pro', href: '#' },
        { linkText: 'Tailwind UI', href: '#' }
      ]
    ]
  },
  {
    question: 'What about browser support?',
    answer: [
      `The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.`,
      `However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.`,
      `Learn more about these technologies:`,
      [
        { linkText: 'Landwind Pro', href: '#' },
        { linkText: 'Tailwind UI', href: '#' }
      ]
    ]
  }
];

function Faq () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    data-accordion-target={`#accordion-flush-body-${index}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`accordion-flush-body-${index}`}
                  >
                    <span>{faq.question}</span>
                    <svg
                      data-accordion-icon=""
                      className={`w-6 h-6 ${index === 0 ? 'rotate-180' : ''} shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`accordion-flush-body-${index}`}
                  className={index === 0 ? '' : 'hidden'}
                  aria-labelledby={`accordion-flush-heading-${index}`}
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    {faq.answer.map((para, pIndex) => {
                      if (Array.isArray(para)) {
                        return (
                          <ul key={pIndex} className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                            {para.map((item, i) => (
                              <li key={i}>
                                <a href={item.href} className="text-purple-600 dark:text-purple-500 hover:underline">
                                  {item.linkText}
                                </a>
                              </li>
                            ))}
                          </ul>
                        );
                      } else if (typeof para === 'object') {
                        return (
                          <p key={pIndex} className="text-gray-500 dark:text-gray-400">
                            <a href={para.href} className="text-purple-600 dark:text-purple-500 hover:underline">
                              {para.linkText}
                            </a>
                          </p>
                        );
                      } else {
                        return (
                          <p key={pIndex} className="mb-2 text-gray-500 dark:text-gray-400">
                            {para}
                          </p>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
