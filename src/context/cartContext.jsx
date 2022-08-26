import { useCallback, createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  totalItems: 0,
  addItem: () => {},
});

export default CartContext;

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState(0);

  const addHandler = useCallback(
    (price, size) => {
      setItems((prevItems) => [
        ...prevItems,
        { amount: 1, size: size, price: price },
      ]);
      setAllItems(items.length + 1);
    },
    [items.length],
  );

  const cartContext = {
    items: items,
    addItem: addHandler,
    totalItems: allItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
