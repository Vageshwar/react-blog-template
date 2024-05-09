import { useEffect, useState } from 'react';
import Hero from './../components/Hero';
import Categories from '../components/categories/Categories';
import {BLOGS} from '../services/blogs';
import BlogCardContainer from '../components/blog_card_container/BlogCardContainer';
import {BLOG_CATEGORIES} from '../services/blog_categories';

function HomePage() {
    const [current_filter, setCurrentFilter] = useState('all');

    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
      if(current_filter === 'all'){
        setBlogList(structuredClone(BLOGS));
      }else{
        const _blogs = structuredClone(BLOGS);
        setBlogList(_blogs.filter(b => b.category === current_filter));
      }
    }, [current_filter])
  return (
    <div className='is-flex flex-column gap-48'>
        <Hero />
        <div className='categories-container'>
            <Categories categories={BLOG_CATEGORIES} current_filter={current_filter} onSelect={(key) => setCurrentFilter(key)} />
        </div>
        <BlogCardContainer blogs={blogList} />
    </div>
  )
}


export default HomePage
