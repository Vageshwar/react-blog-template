import PropTypes from 'prop-types'

function BlogSectionHeader({
    title,
    classes
}) {
  return (
    <h3 className={`blog-section-title ${classes}`}>{title}</h3>
  )
}

BlogSectionHeader.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    classes: PropTypes.string,
}

export default BlogSectionHeader
