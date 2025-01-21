import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom';

const Categories = (props) => {
    const {categories, amount, title} = props;
    const displayedCategories = categories.slice(0,amount);
    console.log('categories', categories)
  return (
    <section className='categories'>
        <span className='semi-bold categories-title'>{title}</span>
        <div className='categories_items'>
          {displayedCategories.map((categories)=>{
            return(
            <Link to={`/products/${categories.id}`} className='categories-item' key={categories.id}>
              <img className='categories-image' src={categories.image} src="" alt="image" />
              <span className='semi-bold20'>{categories.name}</span>
            </Link>
          )}
          )}
        </div>
    </section>
  )
}

export default Categories