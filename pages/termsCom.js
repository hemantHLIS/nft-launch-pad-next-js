import React from 'react'



export default function termsCom(props) {
  return (
    <div>
      {props.data?.map((item)=>{
            return(
        <div>
            <div className="mb-3">
            <h4>{item.No}.&nbsp;{item.Content}</h4>
            <p>{item.Data}</p>   
            </div>
            </div>
            )
        }
        )}
    </div>
  )
}
