/* eslint-disable */

import { twMerge } from "tw-merge";

function Select({ title, options, className, defaultValue }) {
  return (
    <div>
      <select defaultValue={defaultValue || ""} className={twMerge(`border border-gray-500 p-4 w-24 ${className}`) }>
        <option value="" disabled hidden>{title}</option>
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
