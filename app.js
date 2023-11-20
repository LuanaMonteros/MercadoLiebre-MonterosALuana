const express = require('express');
const path = require('path');
const app = express();

const publicPathFold = path.resolve(__dirname, './public')


app.use(express.static(publicPathFold));

  app.listen(3000, () => {
          console.log('Servidor corriendo en http://localhost:3000/')
  });    
    //  const PORT = process.env.PORT || 3001;
    //  app.listen(PORT, ()=> console.log(`Servidor corriendo en http://localhost:${PORT}`));
 
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
});
app.post('/', (req, res) => {
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
// app.listen(3000, () => {
//     console.log('Servidor corriendo en http://localhost:3000/')
// }); 

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Servidor corriendo en http://localhost:${PORT}`));