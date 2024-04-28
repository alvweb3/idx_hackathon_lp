import React from 'react';

const Button = ({ buttonText, additionalClasses = "" }) => (
  <button type="button" className={`inline-flex items-center py-1 px-4 font-poppins font-medium text-white text-lg bg-radial-gradient hover:bg-[#00b4e6eb] rounded-full ${additionalClasses}`}>
    {buttonText}
    <svg
      className="ml-2 w-4 h-4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
);

export default Button;