import { useState } from "react";

interface CollapsibleSidebarProps {
  children: React.ReactNode;
}

const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 p-2 bg-blue-500 text-white rounded-md focus:outline-none">
        {isOpen ? " > " : " < "}
      </button>
      <div
        className={`fixed top-0 right-0 h-2/5 w-96 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default CollapsibleSidebar;
