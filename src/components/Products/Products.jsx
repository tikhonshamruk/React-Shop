/* eslint-disable react/prop-types */

import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom';

  const Products = (props) => {

    console.log('Products:', props.products); // Проверка значения products
    console.log('Type of products:', typeof props.products); 

    const {products, amount, title} = props;
    const displayedProducts = products.slice(0,amount );
    return (
      <section className='products'>
          <span className='semi-bold'>{title}</span>
          <div className='products_items'>
            {displayedProducts.map((product)=>{
              return(
              <Link to={`/products/${product.id}`} className='products-item' key={product.id}>
                <img className='products-image' src={product.images[0]} alt="image" />
                <div className='products-container'>
                  <span className='products-logo semi-bold15'>{product.title}</span>
                  <span className='products-slogan medium12'>{product.category.name}</span>
                  <div className='products-container_footer'>
                    <div className='price bold20'>{product.price}$</div>
                    <div className='OldPrice medium13'>{Math.floor(product.price * 0.8)}$</div>
                    <div className='medium10'>{Math.floor(Math.random() * 20 +1)} purchased</div>
                  </div>
                </div>
              </Link>
            )}
            )}
          </div>
          <button className='products-button btn'>See more</button>
      </section>
    )
  }

  export default Products