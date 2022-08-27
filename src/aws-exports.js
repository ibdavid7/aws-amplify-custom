const awsconfig = {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_qv5VUgoQW",
    userPoolWebClientId: "7b1ck64nthp1ot6sjlt5lhgdts",
  },
  API: {
    endpoints: [
      {
        name: "demo",
        endpoint:
          "https://jgip1b9j95.execute-api.us-east-1.amazonaws.com/Prod",
      },
    ],
  },
}

export default awsconfig;