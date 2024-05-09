import PropTypes from 'prop-types'
import BlogCards from '../molecules/cards/BlogCards'
import thumbnail from '../../assets/ai_blog_image.svg';

function BlogCardContainer({
    blogs,

}) {
  return (
    <div className='blogs-card-container is-flex flex-column gap-32'>
        {
            blogs.map((blog, index) => 
                <div key={index} className='is-flex gap-12'>
                    <img className='blog-thumbnail' src={thumbnail} alt='thumbnail-blog' />
                    <BlogCards  blog_data={blog} />
                </div>
            )
        }
        {
            Array.isArray(blogs) && !blogs.length ?
            <div>Todo: No Blog Available</div>
            :
            null
        }
    </div>
  )
}

BlogCardContainer.propTypes = {
    blogs: PropTypes.array,
}

export default BlogCardContainer
