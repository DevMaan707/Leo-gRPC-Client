import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const BodyEditor: React.FC = () => {
  const [body, setBody] = useState<string>("");

  return (
    <div className="h-96 bg-gray-700 rounded mt-4 p-2">
      <Editor
        height="100%"
        width="100%"
        defaultLanguage="json"
        value={body}
        onChange={(value) => setBody(value || "")}
        options={{
          theme: "vs-dark",
        }}
      />
    </div>
  );
};

export default BodyEditor;
