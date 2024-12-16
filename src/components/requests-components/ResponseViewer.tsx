import React from "react";

const ResponseViewer: React.FC<{ response: string }> = ({ response }) => {
  return (
    <div className="h-48 bg-gray-700 rounded mt-4 p-2 overflow-y-auto">
      <h3 className="text-blue-400 mb-2">Response:</h3>
      <pre className="text-white whitespace-pre-wrap">{response}</pre>
    </div>
  );
};

export default ResponseViewer;
