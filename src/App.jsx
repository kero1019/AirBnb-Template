import React from "react";
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'

const myCards = Data.map((data)=>{
  return <Card 
  key = {data.id}
  {...data}
  />
})

function App() {
  return (
    <div className="container">
      <Nav />
      <Hero />
      <div className="card-list">
      {myCards}
      </div>
    </div>
  );
}

export default App;
