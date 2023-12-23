const express = require('express');
const app = express();
const port = 8080;

app.get('/',  (req, res) => {
  res.send('Homa page')
})

app.get('/hola-mundo',  (req, res) => {
    res.send('hola mundo en su respectiva ruta')
})

app.get('*',  (req, res) =>{
    res.send('404 | page not found')
})
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })