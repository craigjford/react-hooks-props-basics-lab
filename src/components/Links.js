import React from "react";

function Links ({github, linkedin}) {
    console.log("in Links " + github + ' ' + linkedin);
   
    return (
    <div id="Links">  
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a> 
    </div> 
    )
}

export default Links;
