import { Editor } from "@monaco-editor/react";
const CodeEditor = ()=>{
  return (
    <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue=""
        theme="dark"
      />
  );
}
export default CodeEditor