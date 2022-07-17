import React from "react";

export default function Benefits(props){
    return(
        <section className="benefits">
            <figure>
                <img src={props.image} style={{width:'50%', margin:'25%'}} alt='paper bag'></img>
            </figure>
            <h3 style={{color:'#FEFCF7'}}>{props.heading}</h3>
            <p style={{color:'#FEFCF7'}}>{props.par}</p>
        </section>
    )
}