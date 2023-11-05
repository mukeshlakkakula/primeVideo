// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player/lazy'

// import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {each} = props

  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="thumbnailBtn" type="button">
            <img src={each.thumbnailUrl} alt="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <div className="popupAd">
              <button
                type="button"
                data-testid="closeButton"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose />.
              </button>
              <div>
                <ReactPlayer url={each.videoUrl} />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
