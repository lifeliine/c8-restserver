const express = require('express');

const getApi = function (req, res) {
    const users = [{id:1,name:'Matias'},{id:2,name:'Pepe'}]
    res.json(users);
}
  
const postApi = function (req, res) {
      const user = req.body; //para recibir algo que viene desde el body(en postmang post->body->raw ahi lo codeamos)
      user.id = 84848;
      const result = {message: 'User created', user}; // devolvemos lo que recibimos con un id
      res.status(201).json(result); //201: avisa que esta creado
}
  
const putApi =  function (req, res) {
      const id = req.params.id;
      const user = req.body;
      user.id = id;
      const result = {message: 'User updated',user};
      res.status(200).json(result);
}
  
const patchApi =  function (req, res) {
      const result = {message: 'User updated with patch'};
      res.status(200).json(result);
}
  
const deleteApi =  function (req, res) {//con el : indicamos que la entrada es dinamica, se puede poner cualquier id, si ponemos /1 es solo con id 1
      const id = req.params.id; //req todo lo que recibimos, nos da un objeto
      const result = {message: `User with id: ${id} deleted`};
      res.json(result); //cuando es 200 no es necesario ponerlo
}

module.exports = {
    getApi,
    patchApi,
    postApi,
    putApi,
    deleteApi
}

