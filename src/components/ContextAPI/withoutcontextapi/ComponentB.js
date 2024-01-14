import React, { useState } from 'react'
import ComponentC from './ComponentC'

export default function ComponentB(props) {

    const [datasender, setDataSender] = useState('')
  return (
    <div>
       <h1>This is coming from A component and messega: {props.data} </h1> 
       <ComponentC datatoC ={props.data} />
    </div>
  )
}
