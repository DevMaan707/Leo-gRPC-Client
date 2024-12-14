import React, { useState } from 'react';
import RequestSideBarView from './requests-components/Request-Sidebar-View';

export const Sidebar: React.FC = () => {
  const [width, setWidth] = useState(180); 

  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX;
    const startWidth = width;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(180, startWidth + (moveEvent.clientX - startX)); 
      setWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div style={{ width }} className="h-full bg-gray-600 p-2 relative">
      <h2 className="text-white pb-4 underline">Explorer</h2>
      <RequestSideBarView name="Wedzing" dropdownItems={['Option 1', 'Option 2', 'Option 3']} />
  
      <div
        onMouseDown={handleMouseDown}
        className="absolute top-0 right-0 h-full w-2 cursor-ew-resize bg-gray-800"
      ></div>
    </div>
  );
};
