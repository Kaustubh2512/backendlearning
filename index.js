require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitData =
{
  "login": "Kaustubh2512",
  "id": 73696914,
  "node_id": "MDQ6VXNlcjczNjk2OTE0",
  "avatar_url": "https://avatars.githubusercontent.com/u/73696914?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Kaustubh2512",
  "html_url": "https://github.com/Kaustubh2512",
  "followers_url": "https://api.github.com/users/Kaustubh2512/followers",
  "following_url": "https://api.github.com/users/Kaustubh2512/following{/other_user}",
  "gists_url": "https://api.github.com/users/Kaustubh2512/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Kaustubh2512/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Kaustubh2512/subscriptions",
  "organizations_url": "https://api.github.com/users/Kaustubh2512/orgs",
  "repos_url": "https://api.github.com/users/Kaustubh2512/repos",
  "events_url": "https://api.github.com/users/Kaustubh2512/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Kaustubh2512/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kaustubh Andure",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 47,
  "public_gists": 0,
  "followers": 1,
  "following": 2,
  "created_at": "2020-10-30T11:03:47Z",
  "updated_at": "2025-08-03T05:51:12Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gitdata', (req, res) => {
  res.json(gitData)
})
app.get('/aboutus', (req, res) => {
    res.send('<h1>About Us</h1><p>We are a company that values excellence and innovation.</p>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
