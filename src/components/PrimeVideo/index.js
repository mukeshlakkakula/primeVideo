// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const actionMovies = []
    const comedyMovies = []

    const {moviesList} = this.props
    const slideShow = moviesList.map(each => {
      if (each.categoryId === 'ACTION') {
        actionMovies.push(each)
      } else if (each.categoryId === 'COMEDY') {
        comedyMovies.push(each)
      }

      return null
    })
    console.log('ma;', actionMovies)
    return (
      <div className="primeVideosContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <h1>Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        {slideShow}
        <h1>Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    )
  }
}

export default PrimeVideo
