import { ReactNode } from "react"

function Button({ onClick, children }: {onClick:()=>void, children: ReactNode}) {
  console.log(children)
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
};

function PlayButton({ movieName }: {movieName: string}) {
  function handlerPlayClick() {
    alert(`Playing ${movieName}!`)
  };

  return (
    <Button onClick={handlerPlayClick}>
      Play '{movieName}'
    </Button>
  )
};

function UploadButton () {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload image
    </Button>  
  )
};

export function Toolbar() {
	return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton/>
    </div>
  )
}
