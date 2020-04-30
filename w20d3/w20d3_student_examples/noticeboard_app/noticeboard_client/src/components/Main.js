import React from 'react'
import Notices from './Notices.js'

function Main(props) {
  //object restructuring the variables below notices and handleDelete must match the keys in the props object. Once destructured, notices and handleDelete can be called without props.
  const { notices, handleDelete, handleUpdate } = props
    return (
      <main>
        <Notices notices={notices} 
        handleDelete ={handleDelete}
        handleUpdate={handleUpdate}
        />
      </main>
    )
}

export default Main
