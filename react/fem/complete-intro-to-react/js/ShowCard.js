import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const ShowCard = ({show}) => {
  return (
    <Link to={`/details/${show.imdbID}`}>
      <div className='show-card'>
        <img src={`public/img/posters/${show.poster}`} className='show-card-img' />
        <div className='show-card-text'>
          <h3 className='show-card-title'>{show.title}</h3>
          <h4 className='show-card-year'>{show.year}</h4>
          <p className='show-card-description'>{show.description}</p>
        </div>
      </div>
    </Link>
  )
}

ShowCard.propTypes = {
  show: PropTypes.object.isRequired
}

export default ShowCard
