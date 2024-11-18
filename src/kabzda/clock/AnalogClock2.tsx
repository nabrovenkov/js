import style from './style.module.css'

type MarkType = {
  angle: any
  type: any
}

const Mark = ({angle, type}: MarkType) => {
  return (  
    <div className={`clock__face-mark clock__face-mark--${type}`} >
      SimpleMark {angle}
    
    </div>
  )
}

export const AnalogClock2 = () => {
  const renderFaceMark = () => {
    const marks = [];
    for (let i=1; i <= 60; i++) {
      marks.push(<Mark angle={i*6} type={i % 5 === 0 ? 'hour' : 'minute'}/>)
    }
    return marks
  }
  return (
    <>
      <div className={style.clock}></div>
      <div className={'clock__face'}>
        <div className={'clock__face-mark'}>{renderFaceMark()}</div>
      </div>
    </>
  )
}