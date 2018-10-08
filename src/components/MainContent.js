import React, { Component } from 'react';
import PictureBox from "./PictureBox";
import MyArticles from "./MyArticles";
import MyFooterBar from "./MyFooterBar";
import ListOfOne from "./ListOfOne";

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
      {/*"THIS IS THE MAIN CONTENT"*/}
      <PictureBox/>
      <MyArticles />
      <MyFooterBar/>
      <ListOfOne/> 
      </div>
    );
  }
}

export default MainContent;
