import React from 'react';
import data from './components/Data';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/frontend/Routes/Routes';
import { useState } from 'react';

function App() {
  const { productItems } = data;
  const [cartItems, setcartItems] = useState([]);

  const handleAddProduct = (product) =>{
    const productExist = cartItems.find((item)=>item.id === product.id);
    if(productExist){
      setcartItems(cartItems.map((item)=>item.id === product.id ?
      {...productExist, quantity:productExist.quantity +1}: item)
      );
    } else{
      setcartItems([...cartItems, {...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item)=>item.id === product.id);
    if(productExist.quantity === 1){
      setcartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      cartItems.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity -1}
      : item )
    }
  }

  const handleCartClearance = () => {
    setcartItems([])
  }


  return(
    <Router>
      <Header cartItems= {cartItems}/>
      <Routes
       productItems={productItems} 

       cartItems={cartItems}
       handleAddProduct = {handleAddProduct}
       handleRemoveProduct = {handleRemoveProduct}
       handleCartClearance = {handleCartClearance}
       
       
       />
       
    </Router>
  )
}

export default App;
