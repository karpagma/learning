import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import {connector} from './Store'

class Details extends Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }

  componentDidMount () {
    const id = this.props.params.id
    const show = this.props.shows.filter(show => show.imdbID === id)[0]
    axios.get(`http://www.omdbapi.com/?i=${show.imdbID}`)
         .then(response => {
           this.setState({
             omdbData: response.data
           })
         })
         .catch(error => {
           console.error(error)
         })
  }

  render () {
    const id = this.props.params.id
    const show = this.props.shows.filter(show => show.imdbID === id)[0]
    const {title, description, year, poster, trailer} = show
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className="video-rating">{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className="container">
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          {rating}
          <img className='video-poster' src={`/public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: React.PropTypes.object.isRequired,
  shows: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default connector(Details)
