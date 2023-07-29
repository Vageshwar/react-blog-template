import PropTypes from 'prop-types'
import { BLOG_SECTION_TYPE } from '../../constants/constants';
import BlogIntroduction from './blog_sections/BlogIntroduction';
import BlogSectionHeader from './blog_sections/BlogSectionHeader';
import BlogSectionParagraph from './blog_sections/BlogSectionParagaph';
import BlogSubHeading from './blog_sections/BlogSubHeading';

function BlogSection({
    section
}) {
    console.log(section);
    const getSection = () => {
        switch (section?.type) {
            case BLOG_SECTION_TYPE.INTRODUCTION:
            case BLOG_SECTION_TYPE.CONCLUSION:
                return (<BlogIntroduction title={section?.title} data={section?.data} classes={section?.classes} />)
            case BLOG_SECTION_TYPE.SECTION:
                return(
                <div className='blog-section-container'>
                    <BlogSectionHeader title={section.title} />
                    <BlogSection section={section.data} />
                </div>
                )
            case BLOG_SECTION_TYPE.PARAGRAPH:
                return <BlogSectionParagraph data={section?.data} classes={section?.classes} />
            case BLOG_SECTION_TYPE.SUB_HEADING:
                return <BlogSubHeading title={section?.data} classes={section?.classes}  />
            default:
                break;
        }
    }
    
  return (
    <div>
        {getSection()}
    </div>
  )
}

BlogSection.propTypes = {
    section: PropTypes.shape({
        title: PropTypes.string,
        type: PropTypes.string,
        data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        classes: PropTypes.string,
    })
}

export default BlogSection
