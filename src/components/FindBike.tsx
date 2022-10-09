import axios from 'axios';
import React, { useRef, useState } from 'react'
import DefaultMain from './DefaultMain'
import { carRes } from './types';
import govTransport from "./Urls";


export default function FindBike() {
  const InputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<carRes[]>([]);

  async function getBikeData() {
    try{ 
      const res = await axios(govTransport.bike + InputRef.current?.value);
      console.log(res.data.result);
      setItems(res.data.result.records);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <DefaultMain InputRef={InputRef} items={items} getData={getBikeData}/>
  )
}
