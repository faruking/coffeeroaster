import React from 'react';
import Header from './header';
import Footer from './footer';
import imagecommitment from '../assets/about/mobile/image-commitment.jpg';
import imagequality from '../assets/about/mobile/image-quality.jpg';
import Headquarters from './headquarters';

import australia from '../assets/about/desktop/illustration-australia.svg';
import canada from '../assets/about/desktop/illustration-canada.svg';
import uk from '../assets/about/desktop/illustration-uk.svg';


export default function AboutUs() {
    return (
        <>
            <Header></Header>
            <section className='hero-section about-section'>
                <h1>About Us</h1>
                <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world.
                    We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </section>
            <section className='section'>
                <figure style={{ margin: '25% 0 0 0' }}>
                    <img src={imagecommitment} alt='commitment' style={{ width: '100%' }}></img>
                </figure>
                <h1 style={{ color: '#333D4B' }}>Our Commitment</h1>
                <p style={{ color: "rgb(51, 61, 75)" }}>
                    We’re built on a simple mission and a commitment to doing good along the way.
                    We want to make it easy for you to discover and brew the world’s best coffee at home.
                    It all starts at the source. To locate the specific lots we want to purchase,
                    we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places.
                    We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks.
                    We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends,
                    we roast each lot to highlight tasting profiles distinctive to their native growing region.
                </p>
            </section>
            <figure >
                <img src={imagequality} alt='quality' style={{ width: '100%' }}></img>
            </figure>
            <section className='quality'>

                <h3 style={{ color: '#FEFCF7', marginTop: '30%' }}>Uncompromising quality</h3>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing,
                    we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry.
                    Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                    consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
            </section>
            {/* <section className='headquarters'>
                <Headquarters image={uk} heading='United Kingdom' address='68  Asfordby Rd Alcaston SY6 1YA +44 1241 918425'></Headquarters>
                <>
                    <figure>
                        <img src={australia} style={{ width: '20%' }} alt='location map'></img>
                    </figure>
                </>

                <>
                    <h3>Australia</h3>
                </>
                <>
                    <p>68  Asfordby Rd</p>
                    <p>Alcaston</p>
                    <p>SY6 1YA</p>
                    <p>+44 1241 918425</p>
                </>

            </section> */}

<section className="location">
      <section className="about_grid_item">
          <img id="illustration-uk" src={uk}
            style={{width:'48px',height:'48px',objectFit: 'cover'}} alt='uk map'/>
        <h3 style={{margin:'16px'}}>United Kingdom</h3>
        <p className="about_body_text"> 68 Asfordby Rd</p>
        <p className="about_body_text">Alcaston</p>
        <p className="about_body_text"> SY6 1YA</p>
        <p className="about_body_text"> +44 1241 918425</p>

      </section>
      <section className="about_grid_item">
        <img id="illustration-canada" src={canada}
          style={{width:'48px',height:'48px',objectFit: 'cover'}} alt='canada map'/>
        <h3  style={{margin:'16px'}}>Canada</h3>
        <p className="about_body_text">1528 Eglinton Avenue</p>
        <p className="about_body_text">Toronto</p>
        <p className="about_body_text">Ontario M4P 1A6</p>
        <p className="about_body_text">+1 416 485 2997</p>
      </section>
      <section className="about_grid_item">
        <img id="illustration-australia" src={australia}
          style={{width:"48px",height:'48px',objectFit: "cover"}} alt='australia map'/>
        <h3  style={{margin:'16px'}}>Australia</h3>
        <p className="about_body_text">36 Swanston Street</p>
        <p className="about_body_text">Kewell</p>
        <p className="about_body_text">Victoria</p>
        <p className="about_body_text">+61 4 9928 3629</p>
      </section>
    </section>

            <Footer></Footer>
        </>
    )
}