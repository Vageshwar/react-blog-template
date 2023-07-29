import PropTypes from 'prop-types'
import Badge from '../../atoms/badge/Badge'
import { BADGE_TYPES } from '../../atoms/badge/constants'
import './blogCard.css';
import { Button } from '../../atoms/button';
import { useNavigate } from 'react-router-dom';

function BlogCards({
    type,
    blog_data,
}) {

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    }

  return (
    <div onClick={()=> {handleNavigation(blog_data?.link)}} className={`blog-card ${type}`}>
        <div className='blog-card__header is-flex gap-12 align-items-center'>
            <Badge type={BADGE_TYPES.PRIMARY} label={blog_data.category} />
            <span>{blog_data.time_to_read}</span>
        </div>
        <div className='blog-card__body'>
            <div className='blog-card__body_title'>
                {blog_data.title}
            </div>
            <div className='blog-card__body_description'>
                {blog_data.description}
            </div>
        </div>
        <div className='blog-card_footer'>
            <Button label={'Read More >'} type={'tertiary'} onClick={()=> {}} styleClasses={'tertiary-button'}  />
        </div>
    </div>
  )
}

BlogCards.propTypes = {
    type: PropTypes.string,
    blog_data: PropTypes.shape({
        category: PropTypes.string,
        time_to_read: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
    })
}

export default BlogCards
