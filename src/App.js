import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [text,setText] = useState("Mert")
  return (
    <div >
      {text}
      <Input value= {text} placeholder={"Bir Metin İfadesi Giriniz..."} onChange = {(e)=> {
        setText(e.target.value) 
      }}/>

      <Button text ="Giriş Yap" onClick={() => {alert("Tıklandı")}} />
    </div>
  );
}

export default App;
