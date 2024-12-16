import React, { useState } from "react";
import URLBar from "./requests-components/URLBar";
import BodyEditor from "./requests-components/BodyEditor";
import ResponseViewer from "./requests-components/ResponseViewer";


const MainScreen: React.FC = () => {
  const [response, setResponse] = useState("");

  const handleSendRequest = (url: string, body: string) => {
    setTimeout(() => setResponse(`Response from: ${url}\nBody: ${body}`), 1000);
  };

  return (
    
      <div className="h-full bg-gray-800 p-4 flex flex-col">
        <h1 className="text-2xl text-white font-bold mb-4">RPC Client</h1>
  
        <div className="mb-4">
          <URLBar />
        </div>

        <div className="flex flex-1 space-x-4">
          <div className="flex-1 bg-gray-700 rounded p-2">
            <h3 className="text-blue-400 mb-2">Request Body:</h3>
            <BodyEditor />
          </div>
          <div className="flex-1 bg-gray-700 rounded p-2">
            <h3 className="text-blue-400 mb-2">Response:</h3>
            <ResponseViewer response={response} />
          </div>
        </div>
      </div>
    );
  };
  
  export default MainScreen;