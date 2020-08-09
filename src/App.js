import React, {Component} from 'react';
import './App.css';
import BeerComponent from './beer'
import LikeComponent from './liked'



class App extends Component {
constructor(props) {
super(props)
this.state = {
isClicked: false,
input: '',
liked: [],
data: [],
likedMessage: 'Like this beer?'
}
}

componentDidMount() {
fetch('https://api.punkapi.com/v2/beers/')
.then(res => res.json())
.then(examples => {
console.log(examples);
this.setState({ data: examples })
})
}

likeButton = (beer) =>{
  let likedList = this.state.liked;
  likedList.push(beer)
  this.setState({
    liked: likedList
  })
  console.log(this.state.liked)
 
  return(<h1>
    "Liked"
  </h1>)
 
}
 


render () {
console.log(this.state.data);
return (
<div className="App">
  <h1>Liked Beers:</h1>
  <LikeComponent beers = {this.state.liked}/>
   
  {this.state.data.map((item, i) => {
    return (

    <BeerComponent key={i} beer={item} liked={this.likeButton} button={this.state.likedMessage}/>
)
})}
</div>

);
}

}
export default App;
