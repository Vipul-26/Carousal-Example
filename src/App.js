import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import './App.css';
import Carousel from './components/Carousal';

function App() {

  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProdData(res.data);
      });
  }, []);

  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className='container'>
      <h2 className='heading'>
        Product Carousal Example
      </h2>
      <div className='app'>
        {dimensions > 1279 ?
          (<Carousel showCount={5}>
            {prodData.map((data, index) => {
              return (
                <ProductList data={data} key={index} />
              )
            })}
          </Carousel>)
          :
          prodData.map((data, index) => {
            return (
              <ProductList data={data} key={index} />
            )
          })
        }
      </div>
    </div >
  )
}

export default App;