const { google } = require('googleapis');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`

  <html>
  <head>
      <meta charset="UTF-8">
      <title>Check</title>
      <style>
/* CSS Styles */
form {
    max-width: 400px; /* Set maximum width */
    margin: 0 auto; /* Center form horizontally */
}
label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}
input {
    display: block;
    margin-bottom: 20px;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}
button {
    background-color: rgb(86, 93, 100);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-right: 85%;
}
button:hover {
    background-color: rgb(208,77,97);
    margin-right: 85%;
}
label {
    font-weight: bold;
    background: linear-gradient(to right, rgb(208,77,97), rgb(208,77,97));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

label {
    margin-right: 85%;
}
h2{
    color: rgb(86, 93, 100);
}
h1{
    color: rgb(208,77,97);
}
</style>
  </head>
  <body>
      <br>
      <center>
      <h1>BOOK APPOINTMENT</h1>
      <br><br>
      <h2 style="margin-right: 3%;">Already a member? Please Verify</h2>
      <form method="POST" action="/response">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
  
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required>
  
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
  
          <button type="submit">Submit</button>
      </form>
      <h2></h2>
      </center>
  </body>
  </html>  

  `);
});

app.post('/response', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;

  res.send(`

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
      name: ${name},<br>
      phone:${phone},<br>
      email: ${email}.
  </body>
  </html>

        `);
});

app.listen(3000, () => console.log('Server started on port 3000'));
