import React from 'react'

function Notice(props) {
  const {notice} = props
    return (
      <div className="notice">
         <h3>{ notice.title }</h3>
         <p>{ notice.author }</p>
         <small>{notice.phone }</small>
       </div>
    )
}

export default Notice
