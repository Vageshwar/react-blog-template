import PropTypes from 'prop-types'

const SkillCard = ({
    title,
    key,
    // eslint-disable-next-line no-unused-vars
    asset,
}) => {
  return (
    <div key={key} className='skill-card is-flex flex-column gap-4'>
        <div className='text-size-h6 text-align-center'>ASSET</div>
        <div className='text-size-p'>{title}</div>
    </div>
  )
}

SkillCard.propTypes = {
    key: PropTypes.string,
    title: PropTypes.string,
    asset: PropTypes.any,
}

export default SkillCard