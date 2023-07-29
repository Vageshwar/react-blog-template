import PropTypes from 'prop-types'
import { Button } from '../atoms/button'
import './categories.css';
function Categories({
    categories,
    current_filter,
    onSelect
}) {
  return (
    <div className='categories'>
      {
        categories.map(category => 
          <Button onClick={()=> {onSelect(category.key)}} key={category.id} label={category.title} type={'primary'} styleClasses={ current_filter === category.key ?  'primary primary-button' : 'secondary secondary-button'} />
        )
      }
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  current_filter: PropTypes.string,
  onSelect: PropTypes.func,
}

export default Categories
