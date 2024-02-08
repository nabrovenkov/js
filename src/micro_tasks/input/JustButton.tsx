type JustButtonType = {
  name: string
  callBack: (title: string)=>void
}


export function JustButton (props: JustButtonType) {
  function onClickButtonHandler () {
      props.callBack(title);
      
  }
  return (
    <button onClick={onClickButtonHandler}>{props.name}</button>
  )
}