import PropTypes from 'prop-types'
import BlogTitle from './BlogTitle'
import BlogSection from './BlogSection'

function BlogContent({
    blog
}) {
  return (
    <div className='blog-content'>
        <BlogTitle title={blog?.title} />
        <div className='blog-content-body'>
            {
                blog.content.map((content, index) => (
                    <div key={index}>
                        <BlogSection section={content} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

BlogContent.propTypes = {
    blog: PropTypes.shape(
        {
            title: PropTypes.string,
            category: PropTypes.string,
            content: PropTypes.arrayOf(PropTypes.shape({
                type: PropTypes.string,
                data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
                classes: PropTypes.string,
            }))
        }
    ),
    
}

export default BlogContent
