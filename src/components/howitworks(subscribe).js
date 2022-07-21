import React from "react";

export default function HowItWorksSubscribe(props){
    return(
        <section className="howitworks">
           <h1 className="numberTitle">{props.number}</h1>
            <h3 style={{color:'#fff'}}>{props.heading}</h3>
            <p style={{color:'#fff'}}>{props.par}</p>
        </section>
    )
}