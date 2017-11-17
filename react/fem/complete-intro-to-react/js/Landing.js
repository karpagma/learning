import React from 'react'
import {Link, hashHistory} from 'react-router'
import {connector} from './store'

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTerm = this.handleSearchTerm.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }

  handleSearchTerm (event) {
    this.props.setSearchTerm(event.target.value)
  }

  gotoSearch (event) {
    event.preventDefault()
    hashHistory.push('search')
  }

  render () {
    const {searchTerm} = this.props
    return (
      <div>
        <div className='home-info'>
          <h1 className='title'>svideo</h1>
          <form onSubmit={this.gotoSearch}>
            <input
              value={searchTerm}
              onChange={this.handleSearchTerm}
              className='search'
              type='text'
              placeholder='Search' />
          </form>
          <Link to='/search' className='browse-all'> or Browse All!</Link>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  searchTerm: React.PropTypes.string,
  setSearchTerm: React.PropTypes.func
}

export default connector(Landing)
