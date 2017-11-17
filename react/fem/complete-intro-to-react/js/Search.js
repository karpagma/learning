import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import {connector} from './store'

const Search = ({shows, searchTerm}) => {
  let fshows = shows
                .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
                .map(show => (<ShowCard key={show.imdbID} show={show} />))
  return (
    <div className='container'>
      <Header showSearch />
      <div className='shows'>
        {fshows}
      </div>
    </div>
  )
}

Search.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.object),
  searchTerm: React.PropTypes.string
}

export default connector(Search)
