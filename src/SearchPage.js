import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import logo from "./mypic.PNG";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image={logo}
        channel="React Developers"
        verified
        subs="268k"
        noOfVideos={400}
        description="Learn React and become an Web Developer"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="In this video, we learn all about ReactJS, it's features and some basic concepts required to build a React Application. React is a JavaScript library used for building fast and interactive user interfaces for the web as well as mobile applications. It is an open-source, reusable component-based front-end library used by many developers across the globe. We also look at the current industry trends of React, and the salary scenario of a React developer. "
        timestamp="59 seconds ago"
        channel="React Developers"
        title="Lets develop a basic react app"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSy2Kole4X7pNcgUbZrd7gYGnFelM9HLionA&usqp=CAU"
      />
      <VideoRow
        views="6.0M"
        subs="642K"
        description="This course will enable you to build React.js applications using React router, data flow and usage with react, bootstrap and CSS, and React middleware. "
        timestamp="1 month ago"
        channel="React Developers"
        title=" What is React?"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGsd5-SnRszi_2BdTWfZYIY4F4qWl84dJ0XA&usqp=CAU"
      />
      <VideoRow
        views="1.2M"
        subs="650K"
        description="Puzzled about React.js and how it differs from other JavaScript frameworks? Simplilearn’s online training course on React.js will give you a firm base on how React enables developers to master user interface developing skills with ease. "
        timestamp="59 seconds ago"
        channel="React Developers"
        title="How React differs from Javascript?"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtsiCZN171Ivauc2E9SbMNr4hXHkIU3nMoEA&usqp=CAU"
      />
      <VideoRow
        views="2.0M"
        subs="648K"
        description="The main focus of this course then involves aiding you to build simple components and integrating them into more complex design components. Gradually, you will be able to implement components, manage data, handle events, apply routing and much more.  Componentized UI is the future of web development, and learning React.js now will ensure your skills remain relevant in this fast-changing industry."
        timestamp="2 days ago"
        channel="React Developers"
        title="Features of React"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTjk-sDI-5-AYo6o2F8qLMCqZ8DLMvCL2vUw&usqp=CAU"
      />
      <VideoRow
        views="3.5M"
        subs="652K"
        description=" Learn how React is different than other JavaScript frameworks, because it is not really a framework. React is actually mainly a view layer, which is beneficial for use in teams and promotes well-organized code. "
        timestamp="4 months ago"
        channel="React Developers"
        title="React pre-requisites"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbQAD_pHAwG9_hF1pAp8qsU5kurd7SSM0Gog&usqp=CAU"
      />
    </div>
  );
}

export default SearchPage;
