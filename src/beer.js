import React from 'react';

const BeerComponent = (props) => {
return (
<div className="App">

<div>
<img src={props.beer.image_url}/>
<h1>Beer: {props.beer.name}</h1>
<h3>{props.beer.tagline}</h3>
<p>{props.beer.description}</p>
<button onClick={()=>props.liked(props.beer)}>{props.button}</button>
</div>

</div>

);
}

export default BeerComponent