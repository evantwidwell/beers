import React from 'react';

const LikeComponent = (props) => {
return (
  <div>
  {/* <h1>This is Our Listing Component</h1> */}
 {props.beers.map((item, index)=>{
   console.log(index)
   return <div><h1 key={index}>{props.beers[index].name} </h1>
    
     </div>
 })}

 
 </div>
);
}

export default LikeComponent