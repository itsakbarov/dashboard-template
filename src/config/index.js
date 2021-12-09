const github = {
  baseURL: "https://api.github.com/graphql",
  username: "theAkbarov",
  headers: {
    "Content-Type": "application-type",
    Authentication: `bearer ${process.env.REACT_APP_TOKEN}`,
    "Access-Control-Allow-Headers": true,
  },
};

export default github;
