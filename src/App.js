import { useState } from "react";
import Input from "./components/Input/Input";

function App() {
  const [text,setText] = useState("Mert")
  return (
    <div >
      {text}
      <Input value= {text} placeholder={"Bir Metin İfadesi Giriniz..."} onChange = {(e)=> {
        setText(e.target.value) 
      }}/>
    </div>
  );
}

export default App;
