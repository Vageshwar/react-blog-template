// import temp_hero from '../assets/hero.png';
import blog_stars from '../assets/blog_stars.svg';

export default function Hero() {
  return (
    <div className="mg-top-32 fullwidth is-flex flex-column justify-content-center align-items-center gap-12">
      <div>
        <span className='text-primary text-size-h6 text-weight-x-bold'>Blog</span>
        <img src={blog_stars} alt="blog"/>
      </div>
      <div className='text-primary text-size-h4 text-weight-x-bold'>
        News and Insights
      </div>
      <div className='text-secondary text-size-h6 text-weight-bold'>
        Learn about AI Tech, Esports and even anime all at one place
      </div>
    </div>
  )
}
