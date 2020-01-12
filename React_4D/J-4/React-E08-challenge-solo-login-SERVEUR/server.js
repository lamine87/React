// Import
const express = require('express');
const bodyParser = require('body-parser');

// Server
const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Get
app.get('/', (req, res) => {
  console.log('get /');

  res.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir taper en POST avec Axios depuis ton challenge Login sur les URLs suivantes :</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><a href="http://localhost:3001/login">http://localhost:3001/login</a></li>
        <li><a href="http://localhost:3001/forgot">http://localhost:3001/forgot</a></li>
      </ul>
    </div>
  `);
})

// Login
app.post('/login', (req, res) => {
  console.log('---> Post request with /login url received');
  const { email, password } = req.body;
  console.log('email: ',email );
  console.log('password: ',password );
  if (email === 'bouclierman@herocorp.io' && password === 'jennifer') {
    res.send('John');
    console.log('User identify as John <---' );
  }
  else if (email === 'acidman@herocorp.io' && password === 'fructis') {
    res.send('Burt');
    console.log('User identify as Burt <---' );

  }
  else if (email === 'captain.sportsextremes@herocorp.io' && password === 'pingpong') {
    res.send('Karin');
    console.log('User identify as Karin <---' );
  }
  else {
    res.status(400).end();
    console.log('User unknow, send back a code 400 <---' );
  }
});



// Forgot password
app.post('/forgot', (req, res) => {
  console.log('---> Post request with /forgot url received');
  const { email } = req.body;
  console.log('email: ',email );

  if (
    email === 'bouclierman@herocorp.io'
    || email === 'acidman@herocorp.io'
    || email === 'captain.sportsextremes@herocorp.io'
  ) {
    res.status(200).end();
    console.log('We know this user, send back a Code 200 <---' );
  }
  else {
    res.status(400).end();
    console.log('We don\'t know this user, send back a Code 400 <---' );
  }
});

// Start on :3001
app.listen(3001, ()=> console.log('--> A nodeJS server is launch and will answer some request to port 3001'));
