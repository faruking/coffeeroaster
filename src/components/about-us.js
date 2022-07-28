import React from 'react';
import Header from './header';
import Footer from './footer';
import imagecommitment from '../assets/about/mobile/image-commitment.jpg';
import imagecommitmentMedium from '../assets/about/tablet/image-commitment.jpg';
import imagecommitmentLarge from '../assets/about/desktop/image-commitment.jpg';
import imagequality from '../assets/about/mobile/image-quality.jpg';
import imagequalityLarge from '../assets/about/desktop/image-quality.jpg';
import imagequalityMedium from '../assets/about/tablet/image-quality.jpg';


import australia from '../assets/about/desktop/illustration-australia.svg';
import canada from '../assets/about/desktop/illustration-canada.svg';
import uk from '../assets/about/desktop/illustration-uk.svg';


export default function AboutUs() {
    window.onload = function () {
        document.body.style.overflow = 'visible';
    }
    return (
        <>
            <Header></Header>
            <section className='hero-section about-section'>
                <h1>About Us</h1>
                <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world.
                    We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </section>
            <section className='section'>
                <div className='commitment-item'>
                    <figure >
                        <img
                            srcSet={` ${imagecommitmentLarge} 1024w, ${imagecommitmentMedium} 768w, ${imagecommitment} 375w`}
                            alt='commitment'
                            style={{ width: '100%' }}
                            src={imagecommitment}
                            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                        >

                        </img>
                    </figure>
                </div>
                <div className='commitment-item'>
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

                </div>
            </section>
            <section className='wrapper'>
                <div> <figure style={{marginTop:'-25%'}}>
                    <img src={imagequality} srcSet={`${imagequalityLarge} 1024w, ${imagequalityMedium} 768w, ${imagequality} 375w`} id='imagequality' alt='quality' ></img>
                </figure></div>
                <div>
                    <section className='quality'>

                        <h3 style={{ color: '#FEFCF7' }}>Uncompromising quality</h3>
                        <p>Although we work with growers who pay close attention to all stages of harvest and processing,
                            we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry.
                            Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
                            consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                        </p>
                    </section></div>

            </section>


            <h4>Our headquarters</h4>
            <section className="location">
                <section className="about_grid_item">
                    <img id="illustration-uk" src={uk}
                        style={{ width: '48px', height: '48px', objectFit: 'cover' }} alt='uk map' />
                    <h3 >United Kingdom</h3>
                    <p className="about_body_text"> 68 Asfordby Rd</p>
                    <p className="about_body_text">Alcaston</p>
                    <p className="about_body_text"> SY6 1YA</p>
                    <p className="about_body_text"> +44 1241 918425</p>

                </section>
                <section className="about_grid_item">
                    <img id="illustration-canada" src={canada}
                        style={{ width: '48px', height: '48px', objectFit: 'cover' }} alt='canada map' />
                    <h3  >Canada</h3>
                    <p className="about_body_text">1528 Eglinton Avenue</p>
                    <p className="about_body_text">Toronto</p>
                    <p className="about_body_text">Ontario M4P 1A6</p>
                    <p className="about_body_text">+1 416 485 2997</p>
                </section>
                <section className="about_grid_item">
                    <img id="illustration-australia" src={australia}
                        style={{ width: "48px", height: '48px', objectFit: "cover" }} alt='australia map' />
                    <h3  >Australia</h3>
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