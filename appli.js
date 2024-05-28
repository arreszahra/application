const mongoose=require('mongoose');
const express=require('express');
const app= express()
const port=3000



require('dotenv').config(path=".env");
const contact= require('./schemaapp')
const uri=process.env.MONGO_URI;

mongoose.connect('mongodb+srv://arreszahra0:iejlOouiCgA7f1RE@cluster0.q0mldkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(async()=>{
    console.log('connected to database')
})
    .catch((error)=>{
        console.log(error)
    })

 const db='contacts';
 app.post('/contacts', async (req, res) => {
    try {
      const newContact = new contact(req.body);
      const savedUser = await newContact.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })

app.listen(port,()=>
    console.log('running')
)

