import React from 'react'
import Notice from './Notice.js'

function Notices(props) {
  const { notices, handleDelete, handleUpdate } = props
    return (
      <div>
        {notices.map(notice => <Notice key={notice.id} notice={notice} handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        />)}
      </div>
    )
}

export default Notices
