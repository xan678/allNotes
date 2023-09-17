import { useState } from "react";
import EditorJS from "@editorjs/editorjs";

const App = ({}) => {
  const editor = new EditorJS({
    holder: 'editorjs',
    onReady: () => {
      console.log("Editor is ready for work!!!!")
    },
    onChange: (event) => {
      console.log(event)
    }
  });

  return <div id="editorjs"/>
}

export default App;