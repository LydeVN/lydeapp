import React from 'react';
import './assets/home.css';
import TwitchEmbed from './components/TwitchEmbed';

// Home.js
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-embed">
        <TwitchEmbed channel="lydevn" width='100%' height='500'/>
      </div>
      <text>p P P p P P p</text>
    </div>
  );
}