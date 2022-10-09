import axios from 'axios';
import React, { useRef, useState } from 'react'
import DefaultMain from './DefaultMain'
import { carRes, } from './types';
import govTransport from "./Urls";

export default function FindHandicap() {
  const InputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<carRes[]>([]);

  async function getHandiData() {
    try{ 
      const res = await axios(govTransport.handicap + InputRef.current?.value);
      res.data.result.records.map((record:any) => record.handicap = true)
      console.log(res.data.result.record);
      setItems(res.data.result.records);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <DefaultMain InputRef={InputRef} items={items} getData={getHandiData}/>
  )
}
