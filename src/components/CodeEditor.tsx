import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";

function CodeEditor() {
  const [value, setValue] = useState("");

  return (
    <div style={{ height: "100vh" }}>
      <CodeMirror
        value={value}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          viewportMargin: Infinity,
        }}
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        className="code-editor"
      />
    </div>
  );
}

export default CodeEditor;
