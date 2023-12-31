/* eslint-disable */

function Select({ title, options }) {
  return (
    <div>
      <select defaultValue="" className="border border-gray-500 p-4">
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
