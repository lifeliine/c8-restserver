require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
app.use(express.json()); //middelware del json, para configuracion, estoy me permite recibir cosas desde el body
//para los ejemplos de user vamos a hardcodear

app.get('/users', function (req, res) {
  const users = [{id:1,name:'Matias'},{id:2,name:'Pepe'}]
  res.json(users);
});

app.post('/users', function (req, res) {
    const user = req.body; //para recibir algo que viene desde el body(en postmang post->body->raw ahi lo codeamos)
    user.id = 84848;
    const result = {message: 'User created', user}; // devolvemos lo que recibimos con un id
    res.status(201).json(result); //201: avisa que esta creado
});

app.put('/users/:id', function (req, res) {
    const id = req.params.id;
    const user = req.body;
    user.id = id;
    const result = {message: 'User updated',user};
    res.status(200).json(result);
});

app.patch('/users', function (req, res) {
    const result = {message: 'User updated with patch'};
    res.status(200).json(result);
});

app.delete('/users/:id', function (req, res) { //con el : indicamos que la entrada es dinamica, se puede poner cualquier id, si ponemos /1 es solo con id 1
    const id = req.params.id; //req todo lo que recibimos, nos da un objeto
    const result = {message: `User with id: ${id} deleted`};
    res.json(result); //cuando es 200 no es necesario ponerlo
});

app.listen(port, () => {
    console.log(`App started, port:${port}`);
})