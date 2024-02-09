type JustButtonType = {
  name: string
  callBack: ()=>void
}


export function JustButton (props: JustButtonType) {
  function onClickButtonHandler () {
      props.callBack();
      
  }
  return (
    <button onClick={onClickButtonHandler}>{props.name}</button>
  )
}