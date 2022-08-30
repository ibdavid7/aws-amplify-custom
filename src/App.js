import React from "react";
import "./App.css";
import awsconfig from './aws-exports';
import Amplify , { API, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import '@fontsource/inter/variable.css';

import {GridExample} from './components/grid';

import {
  Flex,
  View
} from '@aws-amplify/ui-react';

console.log(awsconfig);
Amplify.configure(awsconfig);

function App() {
  // console.log('test');
  // console.log(process.env);
  const [apiData, setApiData] = React.useState({});


  const handleClickGetUser = async () => {
    const data = await Auth.currentAuthenticatedUser()
    console.log("User credentials:");
    console.log(data);
    return data;
    // setApiData(data.body);
  };
  
  const handleClickGetLinks = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    const data = await API.get("demo", "/app", {
      headers: {
        //🚨 don't embed api keys in real life!!
        // "x-api-key": "grC9ZygLZuaek3hS8Uh6I9rtC5IgYvwd36EAjaba",
        Authorization: token
      },
    });
    // console.log("User links: " + data);
    console.log(data);
    setApiData(data);
    // return data;
    // setApiData(data.body);
  };
  
  const handleClickGenerateLink = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    // console.log(token);
    const data = await API.post("demo", "/app", {
      headers: {
        Authorization: token
      },
      body: {
        "id": "id" + Math.random().toString(36).slice(3),
        "url":"https://www.google.com"
      }
    })
    console.log(data);
    setApiData(data);
  };

    const handleClickUpdateLink = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const token = user.signInUserSession.idToken.jwtToken;
    // console.log(token);
    const data = await API.put("demo", "/app/1234", {
      headers: {
        Authorization: token
      },
      body: {
        "url":"https://www.google.com/search?q=" + Math.floor(Math.random()*(999-100+1)+100)
      }
    })
    console.log(data);
    setApiData(data);
  };
  
  return (
    <div className="App">
      <View>

      <GridExample />

      <header className="App-header">
      <p>API Data:</p>
      
        <button onClick={handleClickGetUser}>User Data</button>
        <button onClick={handleClickGetLinks}>User Links</button>
        <button onClick={handleClickGenerateLink}>Generate New Link</button>
        <button onClick={handleClickUpdateLink}>Update Link</button>
        <p></p>

      </header>
      
      </ View>
    </div>
  );
}

export default withAuthenticator(App);