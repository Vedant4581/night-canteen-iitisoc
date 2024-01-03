import React from 'react'

export default function Updates({updates,dismissUpdates}) {
  const showUpdates = () =>{
    dismissUpdates()
    console.log(updates)
  }
  return (
    <div style={{marginTop:"100px"}}>
      hello<br/>
      <button onClick={showUpdates}>Empty Updates</button>
      <div>
        {updates.map((value)=>{return <div>{value}</div>})}
      </div>
    </div>
  )
}
