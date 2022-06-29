import React from 'react'
import {ChevronDown, ChevronUp} from "../icons"
import { clearActions } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({id, img, title, price, amount}) => {

    const dispatch = useDispatch()

    const removeItems = (id) => {
        dispatch(clearActions.removeItem(id))
    }

    const increaseItems = (id) => {
        dispatch(clearActions.increase(id))
    }

    const decreaseItems = (id) => {
        dispatch(clearActions.decrease(id))
    }

  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>${price}</h4>
            <button className='remove-btn' onClick={() => removeItems(id)}>remove</button>
        </div>
        <div>
            <button className='amount-btn' onClick={() => increaseItems({id})}>
                <ChevronUp />
            </button>
            <p className='amount'>{amount}</p>
            <button 
                className='amount-btn'
                onClick={() =>{
                    if(amount===1){
                        removeItems(id)
                        return;
                    }
                    decreaseItems({id})} }    
            >
                <ChevronDown />
            </button>
        </div>
    </article>
  )
}

export default CartItem