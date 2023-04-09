const express = require('express');
const app = express();
const port  = 4000

let dbUser = [
  { 
    username: "alyaa",
    password: "12345",
    email: "alyaa@gmail.com"
  },
  {
    username: "apihazman",
    password: "66666",
    email: "apiz@gmail.com"
  }
]
//anable json body parsing
app.use(express.json());

//create GET route
app.post('/login', (req,res) => {
  //get the username and password from req
  //const { username, password } = req.body;//
  let data = req.body
  res.send(
    login(
      data.username,
      data.password
    )
  );
    });

    app.use(express.json());
  //find usser in the database
 // const user = dbUser.find(user => user.username === username && user.password === password);
app.post('/register', (req, res)=>{
    let  data = req.body
    res.send(
      register(
        data.username,
        data.password,
        data.email
      )
    );
      });

      app.get('/', (req, res) => {
        res.send('Hello World!')
      })
      
      app.get('/bye', (req, res) => {
          res.send('Bye Bye World!')
        })


app.listen(port,() => {
  console.log(`Example app listening on port ${port}`)
});

//creat a post route for user to log in
app.post('/login', (req, res) => {
  // get the username and pasword from the request body
  const { username, password } =req.body;

  // find the username in the database
  const user = dbUser.find(user => user.username === uesrname && user.password === password);

  // if
  if (user) {
    res.send(user);
  } else {
    // if user is not found, return an error message
    res.send({ error: "User not found "});
  }
})


function login (username, password){
  console.log("someone try to login with", username, password)
  let matched =dbUser.find(element =>
    element.username == username
)
if(matched){
    if(matched.password == password){
        return matched
    }else{
        return "Password not matched"
    }
}
else {
  return "Username not found"
}
}

function register(
  newusername,
  newpassword,
  newemail
){

dbUser.find(element => {
  console.log(element)
})
dbUser.push({
  username : newusername,
  password : newpassword,
  email : newemail,
})
 return "New account has been created"
}
