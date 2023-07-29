import PropTypes from 'prop-types'

function BlogIntroduction({
    title,
    data,
    classes,
}) {
  return (
    <section className='blog-section is-flex flex-column gap-16'>
        <h3 className='blog-section-title'>{title}</h3>
        <p className={`blog_paragraph ${classes}`}>{data}</p>
    </section>
  )
}

BlogIntroduction.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    classes: PropTypes.string,
}

export default BlogIntroduction
