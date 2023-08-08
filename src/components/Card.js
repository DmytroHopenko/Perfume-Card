import React, { Component } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'

export class Card extends Component {
  render() {
    return (
      <div className='card'>
        <div className='perfume-img'></div>
        <div className='perfume-informations'>
          {this.props.items.map( el => (
            <div key={el.id} className='wrap-information'>
                <div className='categories'><p>{el.categories}</p></div>
                <div className='name'><h1>{el.name}</h1></div>
                <div className='description'><p>{el.description}</p></div>
                <div className='wrap-price'>
                    <p>${el.price}</p>
                    <p>${el.oldprice}</p>
                </div>
                <a href='/'><AiOutlineShoppingCart className='cart' />Add to Cart</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
