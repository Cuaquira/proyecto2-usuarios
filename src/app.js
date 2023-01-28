const express = require('express')
const app = express()

app.use(express.json())


//Objeto
const users = [
  {
    id: 1,
    firstName: "Jorge",
    lastName: "Silva",
    email: "jorge@silva.com",
    password: "root",
    age: 18
  }
]
let baseId = 2

// Metodo GET
app.get('/', (req, res) => {
    res.json({
        message: "Server ok!"
    })
})

app.get('/users', (req, res) => {
    res.json(users)
})

// Metodo Get por ID
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    const data = users.find((item) => id === item.id)
    if(data){
        res.json(data)
    }else {
       res.status(404).json({
        message:"Invalid ID"
       })  
    }
})

// create user
app.post('/users', (req, res) => {
    const data = req.body
    
    const newUser = {
        id: baseId++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }
    users.push(newUser)
    res.status(201).json(newUser)
})


// Servidor
app.listen(9000, () => {
    console.log("server started at port 9000")
})


module.exports = app
