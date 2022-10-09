import axios from 'axios';
import React, { useRef, useState } from 'react'
import DefaultMain from './DefaultMain'
import { carRes } from './types';
import govTransport from "./Urls";

export default function FindTruck() {
  const InputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<carRes[]>([]);

  async function getTruckData() {
      try {
        const res = await axios(govTransport.truck + InputRef.current?.value);
        console.log(res.data.result.records);
        setItems(res.data.result.records);

      } catch (err) {
        console.error(err);
      }
  }

  return (
    <DefaultMain InputRef={InputRef} items={items} getData={getTruckData}/>
  )
}