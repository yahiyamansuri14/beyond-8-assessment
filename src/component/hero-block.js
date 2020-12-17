import React from 'react';
import './hero-block.css';    
const Hero=(props)=>{
    const style={
        backgroundImage:`url(${props.image})`,
        backgroundRepeat:'no-repeat',
        position:'fixed',
        opacity:1
    }

    return(
        <div className="hero-container" style={style}>
             <h1>{props.title.toUpperCase()}</h1>
             <h2>{props.subtitle}</h2>
             <h2>{props.description}</h2>
        </div>
    )
}
export default Hero;