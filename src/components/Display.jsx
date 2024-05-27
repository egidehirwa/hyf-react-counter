import PropTypes from 'prop-types';
import './Display.css'

const Display = ({count}) => {
  return (
    <div className="count">
      {count}
    </div>
  )
}

Display.propTypes = {
    count: PropTypes.number.isRequired,
}

export default Display
