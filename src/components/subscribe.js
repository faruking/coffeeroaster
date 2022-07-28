import React, {useRef,useState,useEffect } from "react";
import Header from "./header";
import HowItWorksSubscribe from "./howitworks(subscribe)";
import SubscribeCard from "./subscribecard";
import Footer from "./footer";

export default function Subscribe() {
    const modalRef = useRef(null);
    const [type,setType] = useState('______');
    const [how,setHow] = useState('______');
    const [quantity,setQuantity] = useState('______');
    const [grindOptions,setGrindOptions] = useState('______');
    const [deliveries,setDeliveries] = useState('______');
    const [disabled,setDisabled] = useState('true');
    useEffect(()=>{
        disableButton();
    });
    let handleClick = (e)=>{
        switch(e){
            case 'Capsule':
            case 'Filter':
            case 'Espresso':
            setHow(e);
            disableButton();
            break;
            case 'Single origin':
            case 'Decaf':
            case 'Blended':
            setType(e);
            disableButton();
            break;
            case '250g':
            case '500g':
            case '1000g':
            setQuantity(e);
            disableButton();
            break;
            case 'Wholebean':
            case ' Filter':
            case 'Cafetiére':
            setGrindOptions(e);
            disableButton();
            break;
            case 'Every week':
            case 'Every 2 weeks':
            case 'Every month':
            setDeliveries(e);
            disableButton();
            break;
            default:console.log('error!');
        }
    };
    const disableButton = () => {
        if(deliveries.includes('__') || type.includes('__') || how.includes('__') || quantity.includes('__') || grindOptions.includes('__') ){
            setDisabled('true');
        }
        else{
            setDisabled('false');
        }
    }
   
    const showModal = () => {
        modalRef.current.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    const closeDialog = (e) => {
        if (e.target.id === 'modal') {
            e.target.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    window.onload = function () {
        document.body.style.overflow = 'visible';
    }
    return (
        <>
            <Header></Header>
            <section className='hero-section subscribe-section'>
                <h1>Create a plan</h1>
                <p>Build a subscription plan that best fits your needs. We offer an assortment of the best
                    artisan coffees from around the globe delivered fresh to your door.</p>
            </section>
            <div className="subscribe_grid">
                <div className="plan_seeker">
                    <div className="circle"></div>
                    <hr />
                    <div className="circle"></div>
                    <hr />
                    <div className="circle"></div>
                </div>
                <section className="third_grid ">

                    <HowItWorksSubscribe number='01' heading='Pick your coffee' par='Select from our evolving range of artisan coffees. Our beans are ethically 
                        sourced and we pay fair prices for them. There are new coffees in all profiles 
                        every month for you to try out.'>

                    </HowItWorksSubscribe>
                    <HowItWorksSubscribe number='02' heading='Choose the frequency' par=' Customize your order frequency, quantity, even your roast style and grind type. 
                        Pause, skip or cancel your subscription with no commitment through our online portal.'>

                    </HowItWorksSubscribe>
                    <HowItWorksSubscribe number='03' heading='Receive and enjoy!' par='  We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
                        world-className coffees curated to provide a distinct tasting experience.'>

                    </HowItWorksSubscribe>
                </section>
            </div>

            <section className="ul_area">
                <div className="grid_coffee">
                    <ul className="list" style={{ width: 'auto' }}>
                        <li><a href='#how'><span className="num">01 </span> Preferences</a></li>
                        <hr className="hr"/><br />
                        <li ><a href='#type'><span className="num">02 </span> Bean type</a></li>
                        <hr className="hr"/><br />
                        <li ><a href='#amount'><span className="num">03 </span> Quantity</a></li>
                        <hr className="hr"/><br />
                        <li ><a href='#grind'><span className="num">04 </span> Grind option</a></li>
                        <hr className="hr"/><br />
                        <li ><a href='#deliver'><span className="num">05 </span> Deliveries</a></li>
                    </ul>
                </div>
                <div className="grid_coffee" >
                    <div id='how'></div>
                    <SubscribeCard  handleClick={handleClick}  heading='How do you drink your coffee?'
                        title1='Capsule' text1='Compatible with Nespresso systems and similar brewers'
                        title2='Filter' text2='For pour over or drip methods like Aeropress, Chemex, and V60'
                        title3='Espresso' text3='Dense and finely ground beans for an intense, flavorful experience'
                    >
                    </SubscribeCard>
                    <div id='type'></div>
                    <SubscribeCard  handleClick={handleClick} heading='What type of coffee?'
                        title1='Single origin' text1='Distinct, high quality coffee from a specific family-owned farm'
                        title2='Decaf' text2='Just like regular coffee, except the caffeine has been removed'
                        title3='Blended' text3='Combination of two or three dark roasted beans of organic coffees'
                    >
                    </SubscribeCard>
                    <div id='amount'></div>
                    <SubscribeCard  handleClick={handleClick}  heading='How much would you like?' 
                        title1='250g' text1='Perfect for the solo drinker. Yields about 12 delicious cups.'
                        title2='500g' text2='Perfect option for a couple. Yields about 40 delectable cups.'
                        title3='1000g' text3='Perfect for offices and events. Yields about 90 delightful cups.'
                    >
                    </SubscribeCard>
                    <div id='grind'></div>
                    <SubscribeCard  handleClick={handleClick} heading='Want us to grind them?'
                        title1='Wholebean' text1='Best choice if you cherish the full sensory experience'
                        title2=' Filter' text2='For drip or pour-over coffee methods such as V60 or Aeropress'
                        title3='Cafetiére' text3='Course ground beans specially suited for french press coffee'
                    >
                    </SubscribeCard>
                    <div id='deliver'></div>
                    <SubscribeCard  handleClick={handleClick} heading='How often should we deliver?'
                        title1='Every week' text1='$14.00 per shipment. Includes free first-className shipping.'
                        title2='Every 2 weeks' text2='$17.25 per shipment. Includes free priority shipping.'
                        title3='Every month' text3='$22.50 per shipment. Includes free priority shipping.'
                    >
                    </SubscribeCard>
                    <section className="summary" id="summary">
                        <p >ORDER SUMMARY</p>
                        <article>
                            “I drink my coffee as <span className="bold_green" id="idmca" >{how}</span>,
                            with a <span className="bold_green" id="with_a">{type}</span>  type of bean.
                            <span className="bold_green" id="type_of_bean">{quantity} </span>
                            ground ala <span className="bold_green" id="ground_ala">{grindOptions}</span>,
                            sent to me <span className="bold_green" id="frequency">{deliveries}</span>.”
                        </article>
                    </section>
                    <button className="create-plan-btn disabled" disabled={disabled==='true'}  style={{ marginTop: '56px' }} onClick={showModal} >Create my plan!</button>
                </div>
            </section>

            <section className="modal" ref={modalRef} onClick={closeDialog} id='modal' onBlur={closeDialog}>
                <section className="order_summary">
                    <h2 className="order-summary-bg">Order Summary</h2>
                    <article style={{ color: '#83888F' }}>
                        “I drink my coffee as <span className="bold_green" id="idmca">{how}</span>,
                        with a <span className="bold_green" id="with_a">{type}</span>  type of bean.
                        <span className="bold_green" id="type_of_bean">{quantity} </span>
                        ground ala <span className="bold_green" id="ground_ala">{grindOptions}</span>,
                        sent to me <span className="bold_green" id="frequency">{deliveries}</span>.”
                    </article>
                    <p style={{ color: '#333D4B' }}>
                        Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.
                    </p>
                    <button className="create-plan-btn checkout" style={{ width: '100%' }} >Checkout - $14.00/mo</button>
                    <div className="checkout-flex">
                        <div className="amount">$14.00/mo</div>
                        <div><button className="create-plan-btn checkout-btn" style={{ width: 'fit-content' }} >Checkout</button></div>
                    </div> 
                </section>
            </section>
            <Footer></Footer>
        </>
    )
}