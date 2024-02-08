import { ChangeEvent } from "react"

type JustInputType = {
  title: string
  setTitle: (title: string)=>void
}

export function JustInput (props: JustInputType) {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setTitle(event.currentTarget.value)
	}
  return (
    <input type='text' value={props.title} onChange={onChangeInputHandler} />
  )
}