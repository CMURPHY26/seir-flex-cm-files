import React from 'react'
import Notice from './Notice.js'

function Notices(props) {
  const { notices } = props
    return (
      <div>
        {notices.map(notice => <Notice key={notice.id} notice={notice}/>)}
      </div>
    )
}

export default Notices
