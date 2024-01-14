import React from 'react'

export default function ComponentC(props) {
  return (
    <div>
         <h1>We are getting data from B component and message is: {props.datatoC}</h1>
    </div>
  )
}
