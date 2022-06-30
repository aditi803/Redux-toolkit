import React from 'react'
import { closeModal } from '../features/modal/modalSlice'
import { clearActions } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()

  const modalClearcart = () => {
    dispatch(clearActions.clearCart())
  }
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove all items from your shopping cart?</h4>
        <div className='btn-container'>
            <button 
              type='button' 
              className='btn confirm-btn'
              onClick={()=> {
                modalClearcart()
                dispatch((closeModal()))
              }}
            >
                Confirm
            </button>
            <button 
              type='button' 
              className='btn clear-btn'
              onClick={() =>  dispatch(closeModal())}
            >
               Cancel
            </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal