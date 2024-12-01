import "./App.css";
import { Button } from "@/components/ui/button";
import CodeEditor from "./components/CodeEditor";
function App() {
  return (

    <main>
      <div>
      <Button>Click me</Button>
    </div>
      <h1 className=" bg-blue-600 text-3xl font-bold underline">
      Hello world!
      </h1>
      <CodeEditor></CodeEditor>
    </main>
  );
}

export default App;
