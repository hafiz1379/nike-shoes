/* eslint-disable */

function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`overflow-y-auto p-5 fixed right-0 z-50 top-0 w-full h-full md:w-[50%] lg:w-[35%] shadow-lg bg-white transform transition duration-300
    dark:bg-night ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={onClickClose}
          className="absolute top-4 right-4 p-2 text-black font-bold dark:text-white"
        >
          X
        </button>
        {children}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50" />
      )}
    </div>
  );
}

export default Sidebar;
