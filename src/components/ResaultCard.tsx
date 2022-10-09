import React from 'react'
import { carRes, handicapRes } from './types'

interface propsCard {
  carData: carRes | handicapRes,
}

export default function ResaultCard(props: propsCard) : JSX.Element {
  console.log(props.carData.handicap);
  return (
    <div className='p-3 md:p-2 shadow-md rounded hover:border-gray-100/75 border-2 border-white'>
      <div className='text-sm text-gray-400'>Plate Number:</div>
      <div className='text-2xl px-3 text-gray-700'>
        {props.carData.handicap ? props.carData['MISPAR RECHEV'].toString() : props.carData.mispar_rechev?.toString() }
      </div>
      <hr />
      {
        props.carData.handicap 
        ? 
        <div className='px-4 text-gray-600'>
          <div>Made on: {`${props.carData['TAARICH HAFAKAT TAG'].toString().substring(0,4)} / ${props.carData['TAARICH HAFAKAT TAG'].toString().substring(4,6)} / ${props.carData['TAARICH HAFAKAT TAG'].toString().substring(6)}`}</div>
          <div>Type: {props.carData['SUG TAV'].toString()}</div>
        </div>
        :
        <div className='px-4 text-gray-600'>
          <div>Producer: {props.carData.tozeret_nm}</div>
          <div>Year of production: {props.carData.shnat_yitzur}</div>
          <div>Model: {props.carData.kinuy_mishari}</div>
          <div>Owner: {props.carData.baalut}</div>
          { props.carData.tokef_dt !== undefined ? <div>Test until: {props.carData.tokef_dt?.split('T')[0]}</div> : ''}
          { props.carData.mishkal_kolel !== undefined ? <div>Total weight: {props.carData.mishkal_kolel}</div> : ''}
          { props.carData.tzeva_rechev !== undefined ? <div>Color: {props.carData.tzeva_rechev}</div> : ''}
        </div>
      }
      
    </div>
  )
}
