import React from 'react'
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign Up </title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap');\n\n        *{\n            font-family: 'Josefin Sans', sans-serif;\n            padding: 0;\n            margin: 0;\n        }\n        body{\n            height: 100vh;\n        }\n        nav{\n            background-color: #051367;\n            height: 80px;\n            width: 100%;\n            \n            \n        }\n        .text-a {\n            font-size: 30px;\n            color: aliceblue;  \n        }\n        .main-tag{\n            border-radius: 20px;\n            margin-top: 50px;\n            height: 70vh;\n            background-color: #EEEDDE;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            width: 50%;\n        }\n        .main-tag , nav , .main{\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n\n        input,select{\n            width: 300px;\n            height: 40px;\n            margin: 10px;\n            text-align: center;\n            font-size: 20px;\n            border-radius: 10px;\n            border: 0;\n        }\n        button{\n            width: 150px;\n            height: 40px;\n            background-color: #051367;\n            font-size: 20px;\n            color: #EEEDDE;\n            border-radius: 50px;\n            border: 0;\n        }\n        button:hover{\n            color: #000;\n            background-color: yellowgreen;\n        }\n        .button-tag{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-left: 40px;\n        }\n        .button-tag p{\n            margin-left: 10px;\n        }\n        \n    "
    }}
  />
  <div className="main">
    <nav>
      
    </nav>
    <div className="main-tag">
      <form action="/">
       
      <select name="actor" id="actor">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

        <br />
        <input type="text" id="password" placeholder="Enter Email" />
        <br />
        <input type="text" id="password" placeholder="Enter UserName" />
        <br />
        <input type="text" id="password" placeholder="Enter MobileNumber" />
        <br />
        <input type="text" id="password" placeholder="Enter Password" />
        <br />
        <input type="text" id="password" placeholder="Confirm Password" />
        <br />
        <br />
      </form>
      <div className="button-tag">
        <button>
          <Link to='/login'>Submit</Link>
        </button>
        <p>
          Already a user?<Link to='/login'>login</Link>
        </p>
      </div>
    </div>
  </div>
</>

  )
}

export default Signup
