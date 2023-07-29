import PropTypes from 'prop-types'

function BlogSubHeading({
    title,
    classes,
}) {
  return (
    <p className={`blog-sub-heading ${classes}`}>{title}</p>
  )
}

BlogSubHeading.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    classes: PropTypes.string,
}

export default BlogSubHeading
