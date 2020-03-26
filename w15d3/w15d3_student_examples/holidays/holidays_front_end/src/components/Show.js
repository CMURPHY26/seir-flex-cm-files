import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <>
        <div className="details">
         <h3>Holiday Info:</h3>
         <hr/>
         <h4> { this.props.holiday.name } Day </h4>
         <h6><span>Celebrated:</span>   { this.props.holiday.celebrated ? 'celebrated' : 'not celebrated'} </h6>
         <h6><span>Likes:</span> {this.props.holiday.likes}</h6>
         <p><span>Description:</span> { this.props.holiday.description } </p>
       </div>
      </>
    )
  }
 }
export default Show
