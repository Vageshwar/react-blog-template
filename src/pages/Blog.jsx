import { useEffect, useState } from 'react'
import './blog.css';
import BlogContent from '../components/blog_content/BlogContent';
import { getBlogFromId } from '../utils/utils';
import { useParams } from 'react-router-dom';

function Blog() {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({});
    const [error, setError] = useState('');

    console.log(blog);

    let { id } = useParams(); 

    useEffect(()=>{
        setLoading(true);
        const blog_data = getBlogFromId(id);
        if(blog_data.status === 200){
            setBlog(blog_data.data);
        }else{
            setError('404: Blog Not Found');
        }
        setLoading(false);
    }, [id])
  return (
    <div>
        {
            loading
            ?
                <span>Loading...</span>
            :
                <>
                {
                    error ?
                    <p>{error}</p>
                    :
                    <BlogContent blog={blog} />
                }
                </>
        }
    </div>
  )
}

export default Blog;