import React from "react";

export default function HowItWorks(props) {
    return (
        <section className="howitworks text-align-start">
            <h1 className="numberTitle">{props.number}</h1>
            <h3 style={{ color: '#333D4B' }}>{props.heading}</h3>
            <p style={{ color: '#333D4B' }}>{props.par}</p>
        </section>
    )
}