require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT;
 
app.get('/users', function (req, res) {
  const users = [{id:1,name:'Matias'},{id:2,name:'Pepe'}]
  res.json(users);
});

app.post('/users', function (req, res) {
    const result = {message: 'User created'};
    res.status(201).json(result); //201: avisa que esta creado
});

app.put('/users', function (req, res) {
    const result = {message: 'User updated'};
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