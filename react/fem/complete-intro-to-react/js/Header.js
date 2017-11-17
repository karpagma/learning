const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter
import {connector} from './Store'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (e) {
    this.props.setSearchTerm(e.target.value)
  }
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        type='text'
        className='search-input'
        placeholder='Search'
        value={this.props.searchTerm}
        onChange={this.handleSearchTermChange} />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  setSearchTerm: React.PropTypes.func,
  showSearch: React.PropTypes.bool,
  searchTerm: React.PropTypes.string
}

export default connector(Header)
