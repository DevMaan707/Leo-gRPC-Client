import React from 'react';

interface DropdownListProps {
  items: string[];
}

const DropdownList: React.FC<DropdownListProps> = ({ items }) => {
  return (
    <div className="rounded mt-1 ml-4">
      {items.map((item, index) => (
        <div key={index} className="text-white px-2 py-1 hover:underline cursor-pointer rounded">
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
