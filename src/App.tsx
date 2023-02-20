import React from "react";
import ButtonGm from "./buttons/ButtonGm";
import { RightOutlined } from "@ant-design/icons";
import "./_dist/App.css";
function App() {
  return (
    <div className="App">
      <ButtonGm
        type="primary"
        size="md"
        
        onClick={() => console.log("test")}
      ></ButtonGm>
    </div>
  );
}

export default App;
