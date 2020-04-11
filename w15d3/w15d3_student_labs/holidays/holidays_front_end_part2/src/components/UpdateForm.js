import React from 'react'

class UpdateForm extends React.Component {
  render () {
    return (
      <div className="modal edit">
        <form>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
            />
            <label htmlFor="celebrated">Celebrated</label>
            <input
              type="text"
              id="celebrated"
            />
            <label htmlFor="likes">Likes</label>
            <input
              type="number"
              id="likes"
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="u-full-width"
              id="description"
            >
            </textarea>
            <input type="submit" value="Update Holiday" className="button-primary" />
            <button className="button-red"> Don't Update </button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateForm
