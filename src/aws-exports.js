const awsconfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: process.env.REACT_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: "demo",
        endpoint:
          process.env.APPI_ENDPOINT,
      },
    ],
  },
}

export default awsconfig;