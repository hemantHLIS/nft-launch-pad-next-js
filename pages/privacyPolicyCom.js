import React from 'react'

export default function privacyPolicyCom(props) {
  return(
    <div>
        {props.data?.map((item)=>{
            return(
        <div>
            
            {/* <div className="terms-condition"> */}
            <div className="mb-3">
            <h4>{item.No}.&nbsp;{item.Content}</h4>
            <p>{item.Data}</p>   
            </div>
            </div>
            
        // </div>
            )
        }
        )}
    </div>
  )
}