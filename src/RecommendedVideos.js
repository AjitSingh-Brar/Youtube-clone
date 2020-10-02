import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import logo from "./mypic.PNG";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbQAD_pHAwG9_hF1pAp8qsU5kurd7SSM0Gog&usqp=CAU"
          channel="React Developers"
          channelImage={logo}
          title="React pre-requisites"
          views="3.5M"
          timestamp="4 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTjk-sDI-5-AYo6o2F8qLMCqZ8DLMvCL2vUw&usqp=CAU"
          channel="React Developers"
          channelImage={logo}
          title="Features of React"
          views="2.0M"
          timestamp="2 days ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyM_hK1v7WqR08ZlKBcWDsQPesGoDBgxiLnQ&usqp=CAU"
          channel="Music times"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJoTqLHO2Tz-ANzH8Gk0ukQvrm9BXIradl5A&usqp=CAU"
          title="Listen Hollywood special"
          views="5.0M"
          timestamp="6 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtsiCZN171Ivauc2E9SbMNr4hXHkIU3nMoEA&usqp=CAU"
          channel="React Developers"
          channelImage={logo}
          title="How React differs from Javascript?"
          views="1.2M"
          timestamp="59 seconds ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSC0jLKqxiLE7EqnfAF3e5jzvcpuGSaPHogQQ&usqp=CAU"
          channel="Music times"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJoTqLHO2Tz-ANzH8Gk0ukQvrm9BXIradl5A&usqp=CAU"
          title="Bollywood Mash"
          views="2.0M"
          timestamp="1 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSy2Kole4X7pNcgUbZrd7gYGnFelM9HLionA&usqp=CAU"
          channel="React Developers"
          channelImage={logo}
          title="Lets develop a basic react app"
          views="1.4M"
          timestamp="59 seconds ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCHgWzdp42iGryC5Wkt6iFK5JC_mL8CXcyUA&usqp=CAU"
          channel="Music times"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJoTqLHO2Tz-ANzH8Gk0ukQvrm9BXIradl5A&usqp=CAU"
          title="90's special"
          views="7.2M"
          timestamp="6 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNejRk5TGDeA-IbrkKeo3r19MCzRD9MpYVtA&usqp=CAU"
          channel="Good Day Fitness"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbByf4gINDg4r6fha3hGjriVemQcKsh4S1Og&usqp=CAU"
          title="Learn to stay fit"
          views="45 K"
          timestamp="2 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8Zx0BSsytSCk6BwSHuE7Cp2P9Z3rSzoEI4A&usqp=CAU"
          channel="Music times"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJoTqLHO2Tz-ANzH8Gk0ukQvrm9BXIradl5A&usqp=CAU"
          title="Something special"
          views="6.3M"
          timestamp="8 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhOt1YLr0xeQ_R_s88gymn8cKfpqKqAktc5A&usqp=CAU"
          channel="Good Day Fitness"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbByf4gINDg4r6fha3hGjriVemQcKsh4S1Og&usqp=CAU"
          title="Stay healthy"
          views="5.5M"
          timestamp="3 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYSrug-XHvMm_mFdNz8pwfj0-DrPX65u7WFQ&usqp=CAU"
          channel="Good Day Fitness"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbByf4gINDg4r6fha3hGjriVemQcKsh4S1Og&usqp=CAU"
          title="Learn Yoga"
          views="4.5M"
          timestamp="7 months ago"
        />
        <VideoCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGFu2CUVgJTa1dlCY2lmhRX6-hKk28c8rCPg&usqp=CAU"
          channel="Good Day Fitness"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbByf4gINDg4r6fha3hGjriVemQcKsh4S1Og&usqp=CAU"
          title="Maintain blood pressure b exercise"
          views="8.5M"
          timestamp="6 months ago"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
