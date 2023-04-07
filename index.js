const express = require('express')
const app = express()
const port  = 3000

let dbUser = [
  { 
    username: "alyaa",
    password: "12345",
    email: "alyaa@gmail.com"
  }
]
app.use(express.json());

//create GET route
app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/bye', (req, res) => {
    res.send('BYE BYE WORLD')
});

app.listen(port,() => {
    console.log(' Example app listening on port')
});

app.post('/login', (req,res) => {
  //get the usename and password from req
  const { usernsme, password } = req.body;

  //find usser in the database
  const user = dbUser.find(user => user.username === usernsme && user.password === password);
app.post('/register', (req, res)=>
    let  dbUser = req.body
    res.send(
      register(
        dbUser.username,
        dbUser.password,
        dbUser.name,
        dbUser.email
      )
    ))
  // if user is found
  if (user) {
      res. send (user);

  } else {
  //if user is not found.
res.send({ error: "User not found" });
}
})