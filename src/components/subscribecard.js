import React from "react";
import Card from "react-bootstrap/Card";
import { useRef, useEffect } from "react";
import arrow from '../assets/plan/desktop/icon-arrow.svg';
export default function SubscribeCard(props) {
    const cards = useRef(null);
    const firstCard = useRef(null);
    const secondCard = useRef(null);
    const thirdCard = useRef(null);
    // const [color,setColor] = useEffect();
    function SetColor(e) {
        const x = e.currentTarget.className.toString();
        if (x.includes('first')) {
            e.currentTarget.style.background = '#0E8784';
            e.currentTarget.style.color = '#fff';
            secondCard.current.style.background = '';
            secondCard.current.style.color = '';
            thirdCard.current.style.background = '';
            thirdCard.current.style.color = '';
            // console.log(x);
        }
        else if (x.includes('second')) {
            e.currentTarget.style.background = '#0E8784';
            e.currentTarget.style.color = '#fff';
            firstCard.current.style.background = '';
            firstCard.current.style.color = '';
            thirdCard.current.style.background = '';
            thirdCard.current.style.color = '';

            console.log(x);
        }
        else if (x.includes('third')) {
            e.currentTarget.style.background = '#0E8784';
            e.currentTarget.style.color = '#fff';
            firstCard.current.style.background = '';
            firstCard.current.style.color = '';
            secondCard.current.style.background = '';
            secondCard.current.style.color = '';

            console.log(x);
        }

    }
    const hide = (e) => {
        const fAttribute = e.target.style.transform;
        if (fAttribute === 'rotate(180deg)') {
            e.target.setAttribute("style", 'transform: rotate(0deg);transition: transform .5s;transition-timing: ease-in-out;');
            cards.current.setAttribute("style", 'max-height:600px;transition:max-height .5s;transition-timing: ease-in-out;');
        }
        else {
            e.target.setAttribute("style", 'transform: rotate(180deg);transition: transform .5s;transition-timing: ease-in-out;');
            cards.current.setAttribute("style", 'max-height:0;transition:max-height .5s;transition-timing: ease-in-out;overflow:clip');
        }
    }
    return (
        <section>
            <section className="first-flex" >
                <div> <h2>{props.heading}</h2></div>
                <div>
                    <figure><img src={arrow} alt='dropdown' onClick={hide} /></figure>
                </div>
            </section>
            <section ref={cards}>
                <Card >
                    <Card.Body ref={firstCard} className='first' onClick={SetColor}>
                        <Card.Title>{props.title1}</Card.Title>
                        <Card.Text>{props.text1}</Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body ref={secondCard} className='second' onClick={SetColor}>
                        <Card.Title>{props.title2}</Card.Title>
                        <Card.Text>{props.text2}</Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body ref={thirdCard} className='third' onClick={SetColor}>
                        <Card.Title>{props.title3}</Card.Title>
                        <Card.Text>{props.text3}</Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </section>

    )
}