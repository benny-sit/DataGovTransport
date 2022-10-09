import React, { useRef, useState } from "react";
import ResaultCard from "./ResaultCard";
import axios from "axios";
import { carRes } from "./types";
import DefaultMain from "./DefaultMain";

const govCarUrl = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q="

function Car() {
  const InputRef = useRef<HTMLInputElement>(null);
  const [cars, setCars] = useState<carRes[]>([]);

  async function getCarData() {
    console.log();
    try{
      const res = await axios.get(govCarUrl + InputRef.current?.value);
      console.log(res.data.result);
      setCars(prev => res.data.result.records);
    } catch(err){
      console.log(err);
    }
  }


  return (
    <DefaultMain items={cars} InputRef={InputRef} getData={getCarData} />
  );
}

export default Car;
