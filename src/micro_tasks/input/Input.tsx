import { useState } from "react"
import { FullInput } from "./FullInput"
import { JustButton } from "./JustButton";
import { JustInput } from "./JustInput";

export function Input () {
  
  let [message, setMessage] = useState([
    {message: 'message1'},
    {message: 'message2'},
    {message: 'message3'},
  ]);

  let [title, setTitle] = useState('');

  console.log(title)
  
  function addMessage (title: string) {
    let newMessage = {message: title};
    setMessage([newMessage, ...message]);
  }
  
  return (
    <div className={'Input'}>
      <JustInput title={title} setTitle={setTitle}/>
      <JustButton name="+" callBack={(title)=>{}}/>
      
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  )
}