import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <FaCaretDown /> : <FaCaretRight />}
      </span>
    );
    return (
      <div>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x borde-t rounded">{renderedItems}</div>;
};

export default Accordion;
