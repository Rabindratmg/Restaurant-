import React,{useState} from 'react';
import NavBar from "./nav.js";
import Home from "./Home.js";
import AboutUs from './About.js';
import Gallery from "./Gallery.js";
import ContactUs from "./Contact.js";
import OnlineOrder from "./online.js";
import Cart from "./Cart.js";
import Footer from './Footer.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./menu.js"


function App() {
        const [products]  = useState(data);
        const [cartitems, setcartitems] = useState([]);
        const onAdditems = (product)=>{
                const exist = cartitems.find(x=>x.id=== product.id);
                if(exist){
                         setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x));

                        }
                 else{
                 setcartitems([...cartitems,{...product,qty:1}]);
                 }


        }
        const Increment=(product)=>{
                const exist = cartitems.find(x=>x.id=== product.id);
                if(exist){
                        setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x));

                }


        }

        
        const Decrement=(product)=>{
                const exist = cartitems.find(x=>x.id=== product.id);
                if(exist.qty===1){
                  setcartitems(cartitems.filter((x)=>x.id!==product.id));
            
                }
                else{
                  setcartitems(cartitems.map((x)=>x.id===product.id?{...exist,qty:exist.qty-1}:x));
                }
            
              }
  return (
        <Router>
        <div>
            <NavBar />
                <Switch>
                        <Route exact path='/'>
                                <Home></Home>
                        </Route>
                        <Route path='/AboutUs'>
                                <AboutUs></AboutUs>
                        </Route>
                        <Route path='/Gallery'>
                                <Gallery></Gallery>
                        </Route>
                        <Route path='/ContactUs'>
                                <ContactUs></ContactUs>
                        </Route>
                        <Route path='/OnlineOrder'>
                                <OnlineOrder items={ products } onAdditem={ onAdditems }></OnlineOrder>
                        </Route>
                        <Route path="/Cart">
                                <Cart cartitem={cartitems} onAdditem={Increment} onDecrement={Decrement}></Cart>
                        </Route>
                </Switch>   
                <Footer /> 
                
        </div>
        </Router>
    
   
  );

}


export default App;