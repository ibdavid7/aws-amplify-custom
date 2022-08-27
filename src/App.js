import React from "react";
import "./App.css";
import awsconfig from './aws-exports';
import Amplify , { API, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  console.log('test');
  const [apiData, setApiData] = React.useState("");

  const handleClick = async () => {
    const data = await API.get("demo", "/google", {
      headers: {
        //🚨 don't embed api keys in real life!!
        // "x-api-key": "grC9ZygLZuaek3hS8Uh6I9rtC5IgYvwd36EAjaba",
      },
    });
    console.log(data);
    return data;
    // setApiData(data.body);
  };
  
  const handleClickPost = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    console.log(token);
    const data = await API.post("demo", "/app", {
      headers: {
        //🚨 don't embed api keys in real life!!
        // "x-api-key": "grC9ZygLZuaek3hS8Uh6I9rtC5IgYvwd36EAjaba",
        Authorization: token
      },
      body: {
        "id":"12345",
        "url":"https://www.google.com"
      }
    })
    
    setApiData(data.body);
  };
  
  
  return (
    <div className="App">
      <header className="App-header">
       <p>Welcome! My favorite quote is: {apiData}</p>
        <button onClick={handleClick}>Click me!</button>
        <button onClick={handleClickPost}>Create shortcut!</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);