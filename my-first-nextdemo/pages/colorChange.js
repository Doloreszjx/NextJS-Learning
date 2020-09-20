import { useState } from "react";
// import Head from '../components/Head';

export default function colorChange() {
  const [ color, setColor ] = useState('blue');
  function handleColorChange() {
    setColor(color == 'blue' ? 'red' : 'blue');

  }
  return (
    <>
      {/* <Head>颜色变化</Head> */}
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