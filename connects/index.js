const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const My_DataBase = require('./db')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

//Develop GET /contacts API to list all contacts 
// AND Develop GET /contacts?name= API to search contact by name
router.get('/contacts', (req, res) => {
  let name = req.query.name
  var chackname = []
  if (name) {
    for (let index = 0; index < My_DataBase.length; index++) {
      if(My_DataBase[index].name === name){
        chackname.push(My_DataBase[index])
      }
    }
    res.json(chackname)    
  }
  else{
    res.json(My_DataBase)    
  }
})
//Develop POST /contacts API to create new contact
router.post('/contacts', (req, res) => {
  My_DataBase.push(req.body)
  res.status(201).json(req.body)
})

//Develop GET /contact/:id API to get contact information
router.get('/contacts/:id', (req, res) => {
  res.json(My_DataBase.find(contacts => contacts.id === req.params.id))
})

module.exports = router 