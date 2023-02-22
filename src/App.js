import React from "react";
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'

function App() {
  const jokeElements = Data.map(item =>{
    return (
        <Card 
        key={item.id}
        item={item}
        />
    );
  })
  return(
    <div>
      <Nav />
      <Hero />
      <section className="cards-list" >
        {jokeElements}
      </section>
    </div>
    )
}

export default App;