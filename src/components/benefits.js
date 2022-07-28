import React from "react";

export default function Benefits(props) {
    return (
        <section className="benefits">
            <div>
                <figure>
                    <img src={props.image} alt='paper bag'></img>
                </figure>
            </div>

            <div>
                <h3 style={{ color: '#FEFCF7', fontSize: '24px' }}>{props.heading}</h3>
                <p style={{ color: '#FEFCF7' }}>{props.par}</p>
            </div>

        </section>
    )
}