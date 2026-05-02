const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "AyushRajput1709",
  id: 130988973,
  node_id: "U_kgDOB867rQ",
  avatar_url: "https://avatars.githubusercontent.com/u/130988973?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/AyushRajput1709",
  html_url: "https://github.com/AyushRajput1709",
  followers_url: "https://api.github.com/users/AyushRajput1709/followers",
  following_url:
    "https://api.github.com/users/AyushRajput1709/following{/other_user}",
  gists_url: "https://api.github.com/users/AyushRajput1709/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/AyushRajput1709/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/AyushRajput1709/subscriptions",
  organizations_url: "https://api.github.com/users/AyushRajput1709/orgs",
  repos_url: "https://api.github.com/users/AyushRajput1709/repos",
  events_url: "https://api.github.com/users/AyushRajput1709/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/AyushRajput1709/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Ayush Rajput",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: " Full Stack Developer\r\n Learning new things every day\r\nBuilding projects and improving skills",
  twitter_username: null,
  public_repos: 31,
  public_gists: 0,
  followers: 0,
  following: 9,
  created_at: "2023-04-17T11:48:45Z",
  updated_at: "2026-05-01T14:09:55Z",
};



require("dotenv").config()
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
    res.send("<h1>Ayush Rajput twitter account</h1>")
})
app.get("/pfp",(req,res)=>{
    res.send("Ayush Rajput PFP")
})
app.get("/bio",(req,res)=>{
    res.send("<h1>Cricket Enthusiast </h1>")
})


app.get("/github",(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});