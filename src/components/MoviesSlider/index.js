// Write your code here

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  }
  const {moviesList} = props
  const nanoTech = moviesList.map(each => (
    <MovieItem key={each.id} each={each} />
  ))
  return (
    <div className="slider-container">
      <div className="slideContainer">
        <Slider {...settings}>{nanoTech}</Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
