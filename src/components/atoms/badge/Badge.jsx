import PropTypes from 'prop-types'
import './badge.css';

function Badge({
    label,
    type
}) {
  return (
    <div className={`badge ${type}`}>
        {label}
    </div>
  )
}

Badge.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
}

export default Badge
