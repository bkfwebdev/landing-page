import React, { Component } from 'react';
import TopBanner from "./components/TopBanner";
import PacMan from "./components/PacMan";
import MainContent from "./components/MainContent";

class App extends Component {
render() {
    return (
<div className="App">
{/* <PacMan className ="target1"/> 
I could not figure out how to render the 6 pacman images.
My strategy was to use z indexing and css transform to rotate the pacmans.
Couldn't quite figure it out... :o( */}
<TopBanner/>
<MainContent/>
      </div> 
    );
  }
}

export default App;
