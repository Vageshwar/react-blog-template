import { useState } from 'react';
import Hero from './../components/Hero';
import Categories from '../components/categories/Categories';
import {BLOGS} from '../services/blogs';
import BlogCardContainer from '../components/blog_card_container/BlogCardContainer';
import {BLOG_CATEGORIES} from '../services/blog_categories';

function HomePage() {
    const [current_filter, setCurrentFilter] = useState('all');
  return (
    <div className='is-flex flex-column gap-48'>
        <Hero />
        <div className='categories-container'>
            <Categories categories={BLOG_CATEGORIES} current_filter={current_filter} onSelect={(key) => setCurrentFilter(key)} />
        </div>
        <BlogCardContainer blogs={BLOGS.all} />
    </div>
  )
}


export default HomePage
