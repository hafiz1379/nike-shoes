/* eslint-disable */

import { twMerge } from "tw-merge";

function Select({ title, options, className, value, onChange }) {
  return (
    <div className="dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        className={twMerge(`border border-gray-500 p-3 w-24  ${className}`)}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
