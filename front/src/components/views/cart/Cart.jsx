import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./style.css";

// Components



const Cart = () => {
    const [product, setProduct] = useState({})

    useEffect(()=> {
        axios.get('https://fakestoreapi.com/products')
        .then(res => setProduct(res.data))
    },[])
    
    console.log(product);

    return (
       <div>
           
        </div>
    )
}

export default Cart;