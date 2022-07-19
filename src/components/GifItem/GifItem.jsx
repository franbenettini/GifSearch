import "./_GifItem.scss"
import PropTypes from 'prop-types'

export const GifItem = ({title, url}) => {
  
    return (
        <div className="card">
            <img src={url} alt="gif" />
            <p data-testid='test-title'>{title}</p>
            
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}