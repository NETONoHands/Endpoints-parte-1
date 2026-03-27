import { Router } from "express";
import express from "express"
import db from "../client/db";

const router = Router();

router.get("/", (req,res) => {
    const usuarios = db.findAll()

    res.status(200).json(usuarios)
})

router.post("/", (req,resp) =>{
    const {name,email,password} = req.body;

    const createUser = db.create({
        name,
        email,
        password
    })

    resp.status(200).json(createUser)
})

router.put("/:id", (req,res) => {
    const idUser = Number(req.params.id);
    const { name, email, password} = req.body

    const userAtual = {
        id: idUser,
        name,
        email,
        password
    };

    const resultado =  db.updateById(idUser, userAtual);

    res.status(200).send(resultado);
    })

router.get("/:id", (req,res)=>{
    const idUser = Number(req.params.id);
    const usuario = db.findById(idUser);

    res.status(200).json(usuario);
})

router.delete("/:id", (req,res)=>{
    const idUser = Number(req.params.id);
    const removeUser = db.remove(idUser);
    
    res.status(200).json(removeUser);
})

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/*
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    {
        name: String,
        email: String,
        password: String
    }
*/
export default router
