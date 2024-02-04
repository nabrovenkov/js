import { useState } from "react"

export function UseStateTest () {
  let [a, setA] = useState(1)

  const onClickHandler = () => {
    setA(++a)
    console.log(a)
  }

  const onClickHandler1 = () => {
    setA(a = 0)
  }
  return (
    <>
     <div>{a}</div>
     <button onClick={onClickHandler}>test</button>
     <button onClick={onClickHandler1}>0</button>
    </>
  )
}