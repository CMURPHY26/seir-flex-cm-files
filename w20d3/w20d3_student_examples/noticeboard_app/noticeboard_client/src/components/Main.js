import React from 'react'
import Notices from './Notices.js'

function Main(props) {
  const { notices } = props
    return (
      <main>
        <Notices notices={notices} />
      </main>
    )
}

export default Main
