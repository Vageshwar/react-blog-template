import PropTypes from 'prop-types'

function BlogTitle({
    title,
}) {
  return (
    <div className='blog_title'>{title}</div>
  )
}

BlogTitle.propTypes = {
    title: PropTypes.string,
}

export default BlogTitle
