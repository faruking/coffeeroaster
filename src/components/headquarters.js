import React from "react";

export default function Headquarters(props) {
    return (
        <section>
            <figure>
                <img src={props.image} style={{ width: '20%' }} alt='location map'></img>
            </figure>
            <h3>{props.heading}</h3>
            <>{props.address}</>
        </section>
    )
}