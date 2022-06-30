import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import { clearActions} from "./features/cart/cartSlice"
import Modal from "./components/Modal";


function App() {

  const {cartItems} = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearActions.calculateTotals()) 
  }, [cartItems])
   
  return (
    <main>
      {isOpen && <Modal />}   
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
