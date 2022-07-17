import React from "react";

export default function Products(props){
    return(
        <>
            <figure>
                <img src={props.image} style={{width:'100%', marginLeft:'5%'}} alt='paper bag'></img>
            </figure>
            <h3>{props.heading}</h3>
            <p style={{color:'#333D4B',marginBottom:'48px'}}>{props.par}</p>
        </>
        
    )
}