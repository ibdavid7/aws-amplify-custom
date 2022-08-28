const awsconfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "demo",
        endpoint:
          process.env.REACT_APP_API_ENDPOINT,
      },
    ],
  },
}

export default awsconfig;