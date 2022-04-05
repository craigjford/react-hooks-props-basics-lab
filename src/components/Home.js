import React from "react";

function Home({color,name,city}) {
  //const {color,name,city} = props
  console.log('in home ', {color}, ' ', {name}, ' ', {city})
  return (
    <div id="home">
      <h1 style={ {color: color} }>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
