import React from 'react';
import {Link} from 'react-router-dom';

function navbar() {
    
  return (
    <div>
        <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n.myDiv {\n  border: 5px outset ;    \n  text-align: center;\n}\n.header{\n\ntext-color :white;\nbackground-color:Blue;\n}\nnav {\n        height: 80px;\n        background-color: #051367;\n}\n      nav a {\n        color: #fff;\n        margin: 50px;\n        font-size: 20px;\n      }\n      nav .track-a {\n        font-size: 30px;\n      }\n\t  .logout-button {\n        position: absolute;\n        right: 100px;\n        width: 120px;\n        height: 40px;\n        font-size: 20px;\n        background-color: yellow;\n        border: 0;\n      }\n      .logout-button:hover {\n        background-color: turquoise;\n      }\n\t  .grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  gap: 10px;\n  text-align: center;\n  padding: 10px;\n  }\n  \n\n" }} />
  
<nav>
    <Link to='/newcardform' className='track-a'>New Card Form</Link>
    <Link to='' >Correction Form</Link>
    <Link to='' >Track Status</Link>
    <Link to='/login' className="logout-button">Logout</Link>
</nav>
    </div>
  );
}

export default navbar
