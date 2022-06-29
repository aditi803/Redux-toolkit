import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import { clearActions} from "./features/cart/cartSlice"


function App() {

  const {cartItems} = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearActions.calculateTotals()) 
  }, [cartItems])
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
