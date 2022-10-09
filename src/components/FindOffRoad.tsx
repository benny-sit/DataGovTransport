import React, { useRef, useState } from 'react'
import DefaultMain from './DefaultMain'
import { carRes } from './types';
import govTransport from "./Urls";

export default function FindOffRoad() {
  const InputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<carRes[]>([]);

  async function getBikeData() {

  }

  return (
    <DefaultMain InputRef={InputRef} items={items} getData={getBikeData}/>
  )
}
