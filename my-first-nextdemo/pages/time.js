import { useState } from "react";
import dynamic from 'next/dynamic';

const LoadPicture = dynamic(import('../components/LoadPicture'));

 export default function Time() {
   const [ nowTime, setNowTime ] = useState(Date.now());
   const handleStandarDate = async() => { // 把方法变成异步模式；
     const moment = await import('moment'); // 等待moment模块加载完成；
     setNowTime(moment.default(Date.now()).format());
   }

   return (
     <>
      <LoadPicture />
      <div>宇宙级别美少女为您报时：{nowTime}</div>
      <button onClick={handleStandarDate}>标准时间格式</button>
     </>
   )
 }