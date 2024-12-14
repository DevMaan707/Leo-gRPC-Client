import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import DropdownList from './DropdownList';

interface RequestSideBarViewProps {
  name: string;
  dropdownItems: string[];
}

const RequestSideBarView: React.FC<RequestSideBarViewProps> = ({ name, dropdownItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-white">
      <div
        className="flex items-center justify-between px-2 py-1  rounded cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>
          <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} size="xs" /> {name}
        </span>
        <FontAwesomeIcon
          icon={faEllipsisH}
          className="text-gray-400 hover:text-white"
        />
      </div>
      {isExpanded && <DropdownList items={dropdownItems} />}
    </div>
  );
};

export default RequestSideBarView;
