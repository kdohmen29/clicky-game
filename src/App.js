import React, { Component } from 'react';
import './App.css';


let images = [
  {
    id: 1,
    src: "https://i.pinimg.com/236x/0a/3f/c6/0a3fc6f63f0fb890f544035bced4ad55--sponge-bob-classic-cartoons.jpg",
    beenClicked: false
  },
  {
    id: 2,
    src: "https://static.tvtropes.org/pmwiki/pub/images/spongebob_character.jpg",
    beenClicked: false
  },
  {
    id: 3,
    src: "https://static.tvtropes.org/pmwiki/pub/images/spongebob_mrkrabs.jpg",
    beenClicked: false
  },
  {
    id: 4,
    src: "https://static.tvtropes.org/pmwiki/pub/images/spongebob_patrick.jpg",
    beenClicked: false
  },
  {
    id: 5,
    src: "https://static.comicvine.com/uploads/scale_medium/11132/111325030/5880117-spongebob%20squarepants%20mrs%20puff.jpg",
    beenClicked: false
  },
  {
    id: 6,
    src: "https://vignette.wikia.nocookie.net/nickelodeon/images/1/11/SpongeBob-Gary.jpg/revision/latest?cb=20180104021932",
    beenClicked: false
  },
  {
    id: 7,
    src: "https://www.lifewire.com/thmb/R83AtLxKyYRbEzaoscsXoM0gO3k=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/spongebob-squarepants-nickelodeon-032916-1276x850-5bfecf8246e0fb0026823b0a.jpg",
    beenClicked: false
  },
  {
    id: 8,
    src: "https://i.pinimg.com/236x/c9/55/f4/c955f459f6668640e312dc40361fcb1a.jpg",
    beenClicked: false
  },
  {
    id: 9,
    src: "https://images-na.ssl-images-amazon.com/images/I/41We5-L3NwL.jpg",
    beenClicked: false
  },
  {
    id: 10,
    src: "https://vignette.wikia.nocookie.net/spongebob/images/f/f2/Plankton-spongebob-squarepants-mr-lawrence.jpg/revision/latest?cb=20110923013636",
    beenClicked: false
  },
  {
    id: 11,
    src: "https://vignette.wikia.nocookie.net/youtubepoop/images/6/60/FlatstheFlounder.jpg/revision/latest?cb=20180609083840",
    beenClicked: false
  },
  {
    id: 12,
    src: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/painty-the-pirate-spongebob-squarepants-8.21.jpg",
    beenClicked: false
  }
];

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    message: 'Click any image to begin',
    images: images,
    clickedArray: []

  }

  

  


  //lifecyle method
  componentDidMount(){
    console.log('componentDidMount');
  }

  //lifecyle method
  myMethod(){
    console.log('componentWillMount');
  }


  handleImageClick = (event) => {
    let currentId =event.target.alt;
    console.log(currentId);
    const shuffledArray = this.shuffleArray(images);
    this.setState({ images: shuffledArray });
    
   // If image has already been clicked set this.state.score = 0, empty clickedArray
   if (this.state.clickedArray.includes(currentId)) {
    this.setState({
      score: 0,
      clickedArray: [],
      message: "Incorrect!! GAME OVER! Click another image to play again!"
    });
    // Else
  } else {
    this.setState({
      score: this.state.score + 1,
      // clickedArray: this.state.clickedArray.concat([images.id]),
      clickedArray: [...this.state.clickedArray, currentId],
      message: "Correct!!"
    });
  }
  // set topscore = score if score>topscore.
  if (this.state.score > this.state.highScore) {
    this.setState({ highScore: this.state.score });
  }
};

 // Shuffle function
 shuffleArray = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
  

  //lifecyle method
  
  render() {

    console.log(images);
    

    let displayImages = this.state.images.map(eachItem => (
      <img
        alt={eachItem.id}
        key={eachItem.id}
        src={eachItem.src}
        onClick={this.handleImageClick}
      />
    ));
    return (
      <div className="App">

        <div className="Header">
          <div>Clicky Game</div>
          <div>{this.state.message}</div>
          <div>Score: {this.state.score} | High Score: {this.state.highScore}</div>

        </div>
          <div className="imageConatiner">{displayImages}</div>
      </div>
        
    );
  }
}




export default App;
