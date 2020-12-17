import './App.css';
import Hero from './component/hero-block';
import {Component} from 'react';
class App extends Component{
  state={
    hero:{
      id:1,
      title:'Batman',
      subtitle:'Bruce Wayne',
      description:'Bruce Wayne is an billionaire of Gotham City,When city was controlled by mob he took step forward to save his city as Batmen',
      //imageURL:"https://i.ibb.co/R70vBrQ/men.png"
      imageURL:"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    },
  }
  
  render(){
    const style={
      color:'blue'
    }
    return (
      <div className="App">
        <h1 style={style}>Assessment</h1>
        <h1>Yahiya Masnsuri</h1>
        <Hero
          title={this.state.hero.title}
          subtitle={this.state.hero.subtitle}
          description={this.state.hero.description}
          image={this.state.hero.imageURL}
        /> 
      </div>
    )
  }
}
export default App;
