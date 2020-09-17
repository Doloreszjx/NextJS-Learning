import { useState } from "react"

export default function colorChange() {
  const [ color, setColor ] = useState('blue');
  function handleColorChange() {
    setColor(color == 'blue' ? 'red' : 'blue');

  }
  return (
    <>
      <div className="change-color">让我们来变颜色</div>
      <button onClick={handleColorChange}>change color</button>
      <style jsx>
        {`
          .change-color {
            color: ${color};
          }
        `}
      </style>
    </>
    
  )
}