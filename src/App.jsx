import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwsyz";
  if (numberAllowed) str = str + "0123456789";
  if (characterAllowed) str = str + "!@#$%^&*-_=[]{}~`'";
  for (let index = 0; index <= length; index++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass)
  }, [
    length,
    numberAllowed,
    characterAllowed,
    setPassword,
  ]);
  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  //ref hook
  const passwordRef=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className="">
      <h1 className="text-4xl text-center p-8 font-bold">Password Generator</h1>
      <Card length={length} setLength={setLength} numberAllowed={numberAllowed} characterAllowed={characterAllowed} password={password} setNumberAllowed={setNumberAllowed} setCharacterAllowed={setCharacterAllowed} passwordRef={passwordRef} copyPasswordToClipboard={copyPasswordToClipboard} ></Card>
      </div>
    </>
  );
}

export default App;
