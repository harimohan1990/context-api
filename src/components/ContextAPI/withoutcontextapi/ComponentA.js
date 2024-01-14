import React,{useState} from 'react'
import ComponentB from './ComponentB'

export default function ComponentA() {

const [data, setData] =useState('Hi, Data')

  return (
    <div>
        <ComponentB data={data}/>
    </div>
  )
}
