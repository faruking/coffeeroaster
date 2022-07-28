import React from 'react';
import Header from './header'; 

import Products from '../components/products';
import danche from '../assets/home/desktop/image-danche.png';
import granespresso from '../assets/home/desktop/image-gran-espresso.png';
import planalto from '../assets/home/desktop/image-planalto.png';
import piccollo from '../assets/home/desktop/image-piccollo.png';

import Benefits from '../components/benefits';
import coffeebeanIcon from '../assets/home/desktop/icon-coffee-bean.svg';
import giftIcon from '../assets/home/desktop/icon-gift.svg';
import truckIcon from '../assets/home/desktop/icon-truck.svg';

import HowItWorks from '../components/howitworks';
import Footer from '../components/footer';

export default function Home() {
    window.onload = function(){
        document.body.style.overflow = 'visible';
    }
    return (
        <>
         <Header></Header>
                <section className='hero-section'>
                    <h1>Great coffee made simple.</h1>
                    <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan
                        coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <button className='create-plan-btn' onClick={function(){window.location.href='/subscribe'}}>Create your plan</button>
                </section>
                <h1 className='our_collection'>Our collection</h1>
                <section className='products-area'>
                    <Products image={granespresso} heading='Gran Espresso' par='Light and flavorful blend with cocoa and black pepper for an intense experience'></Products>
                    <Products image={planalto} heading='Planalto' par=' Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'></Products>
                    <Products image={piccollo} heading='Piccollo' par=' Mild and smooth blend featuring notes of toasted almond and dried cherry'></Products>
                    <Products image={danche} heading='Danche' par=' Ethiopian hand-harvested blend densely packed with vibrant fruit notes'></Products>
                </section>
                <section className='dark_grey'>
                    <h2>Why choose us?</h2>
                    <p>
                        A large part of our role is choosing which particular coffees will be featured
                        in our range. This means working closely with the best coffee growers to give
                        you a more impactful experience on every level.
                    </p>
                </section>
                <section className='second_grid'>
                    <Benefits image={coffeebeanIcon} heading='Best Quality' par='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'></Benefits>
                    <Benefits image={giftIcon} heading='Exclusive benefits' par='Special offers and swag when you subscribe, including 30% off your first shipment.'></Benefits>
                    <Benefits image={truckIcon} heading='Free shipping' par=' We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'></Benefits>
                </section>
                <section className='btn-area'>
                    <h3 className='text-align-start'>How it works</h3>
                    <div className="plan_seeker">
    <div className="circle"></div>
 <hr/>
  <div className="circle"></div>
<hr/>
  <div className="circle"></div>
 </div>
                    <section className="third_grid">
                        <HowItWorks number='01' heading='Pick your coffee' par='Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out.'>

                        </HowItWorks>
                        <HowItWorks number='02' heading='Choose the frequency' par=' Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.'>

                        </HowItWorks>
                        <HowItWorks number='03' heading='Receive and enjoy!' par='  We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.'>

                        </HowItWorks>
                    </section>
                    <button className='create-plan-btn left'  onClick={function(){window.location.href='/subscribe'}}>Create your plan</button>

                </section>
                <br/>
                <Footer ></Footer>
        </>
    )
}