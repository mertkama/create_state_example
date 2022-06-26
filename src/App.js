import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Form from "./components/Form/Form"
import './App.css'
function App() {
  const [text, setText] = useState("Mert")
  return (
    <div className="custom-page">

      <Form>
        <h2>Giriş Sayfası </h2>
        <Input value={text} placeholder={"Bir Metin İfadesi Giriniz..."} onChange={(e) => {
          setText(e.target.value)
        }} />

        <Input value={text} placeholder={"Bir Metin İfadesi Giriniz..."} onChange={(e) => {
          setText(e.target.value)
        }} />

        <Button text="Giriş Yap" onClick={() => { alert("Tıklandı") }} />
      </Form>

    </div>
  );
}

export default App;
