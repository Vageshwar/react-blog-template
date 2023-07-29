import PropTypes from 'prop-types'

function BlogSectionParagraph({
    data,
    classes,
}) {
  return (
    <section className='blog-section'>
        <p className={`blog_paragraph ${classes}`}>{data}</p>
    </section>
  )
}

BlogSectionParagraph.propTypes = {
    title: PropTypes.string,
    data: PropTypes.string,
    classes: PropTypes.string,
}

export default BlogSectionParagraph
