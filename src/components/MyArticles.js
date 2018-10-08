import React, { Component } from 'react';
import ArticleOne from "./ArticleOne";
import ArticleTwo from "./ArticleTwo";

class MyArticles extends Component {
  render() {
    return (
      <div className="MyArticles">
    
      <ArticleOne/>
      <ArticleTwo/>
    
      </div>
    );
  }
}

export default MyArticles;
