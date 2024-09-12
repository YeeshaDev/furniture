import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity,addToCart, getCartTotal } from '../redux/cartSlice';


const useQuantity = (initialQty = 1) => {
  const [qty, setQty] = useState(initialQty);
  const [addedItemToCart, setAddedItemToCart] = useState(false);
  const dispatch = useDispatch();

  const increaseQuantity = (itemId, currentQuantity) => {
    const newQty = currentQuantity + 1;
    setQty(newQty);
    setAddedItemToCart(false);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    const newQty = Math.max(currentQuantity - 1, 1);
    setQty(newQty);
    setAddedItemToCart(false);
    dispatch(updateQuantity({ id: itemId, quantity: newQty }));
  };

  const addItemToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedItemToCart(true);
  };

  useEffect(() => {
    if (addedItemToCart) {
      setQty(initialQty);
    }
  }, [addedItemToCart, initialQty]);

  return { qty, increaseQuantity, decreaseQuantity, addItemToCart, addedItemToCart, setAddedItemToCart };
};

export default useQuantity;
