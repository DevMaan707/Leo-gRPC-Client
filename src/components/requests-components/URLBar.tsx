import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const URLBar: React.FC = () => {
  const [url, setUrl] = useState("");

  const handleSend = () => {
    console.log(`Sending request to: ${url}`);
    // Trigger RPC client request logic
  };

  return (
    <div className="flex items-center bg-gray-700 p-2 rounded">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        className="flex-grow bg-gray-800 text-white p-2 rounded-l outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default URLBar;
