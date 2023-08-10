import express from "express"
import { Router } from "express"
import db from "../db/conn.js"
import {ObjectId} from 'mongodb'

const router = express.Router()

router.get("/", async (req,res) =>{
    let collection = await db.collection("records")
    let results = await collection.find({}).toArray()
    res.send(results).status(200)
})

router.post("/", async (req,res) =>{
    let newDocument = {
        name:req.body.name
    }
    let collection = await db.collection("records")
    let results = await collection.insertOne(newDocument)
    res.send(results).status(200)
})


router.delete("/:id", async (req,res) =>{
    const query = {_id:new ObjectId(req.params.id)}
    let collection = await db.collection("records")
    let results = await collection.deleteOne(query)
    res.send(results).status(200)
})

export default router