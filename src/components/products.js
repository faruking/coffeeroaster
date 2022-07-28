import React from "react";

export default function Products(props) {
    return (

        <div className="container">
            <div className="container-item">
                <figure>
                    <img src={props.image} style={{ width: '100%', marginLeft: '5%' }} alt='paper bag'></img>
                </figure>
            </div>
            <div className="container-item">

                <h3>{props.heading}</h3>
                <p style={{ color: '#333D4B', marginBottom: '48px' }}>{props.par}</p>
            </div>
        </div>

    )
}