import React from 'react'
import Products from './Products'
import ProductsDetails from '../Data/ProductsDetails';
import ProductCarousel from './ProductCarousel';

function Home(props) {
    const Items = props.a
    // console.log("a", Items);
    return (
        <div class="home-div">
            <img className="home-wallpaper" src="https://m.media-amazon.com/images/I/51UjXjBbwJL._SX3000_.jpg" alt="home-page-wallpaper" />
            <div className="product-div">
                {ProductsDetails.map((a) => {
                    return (
                        <Products title={a.title} img1={a.img1} img2={a.img2} img3={a.img3} img4={a.img4} p1={a.p1} p2={a.p2} p3={a.p3} p4={a.p4} a1={a.a1}/>
                    )
                })}
           
            </div>
            {/* <ProductCarousel /> */}
            
        </div>
    )
}

export default Home
