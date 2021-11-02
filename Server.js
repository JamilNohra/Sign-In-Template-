
const express = require('express')
// var bodyParser = require('body-parser')
const app = express()

app.use(express.json())

var cors = require('cors')
app.use(cors())

const { v4: uuidv4 } = require('uuid');
const xlsx = require('xlsx');
//const { request } = require('express')

var uData = []
const fileToRead = xlsx.readFile('Users.xlsx')
var uData = xlsx.utils.sheet_to_json(fileToRead.Sheets["Sheet1"]);
//console.table(uData);


app.get('/Users', function (req, res) {
 // console.log(uData)
    res.send(uData)
  })  
  
  

app.get('/getUser', function (req, res) {
  for (let j = 0; j < uData.length; j++) { 
      if (req.query.email == uData[j].email) {
        res.send(uData[j])
      }
      else{
        if(j==uData.length-1)
        res.send('Email Not Found')
      }
  }
  })

  app.post('/addUsers', (req, res) => {
    console.log(req.body);
    uData.push(req.body);
    console.log(uData);
    xlsx.utils.json_to_sheet(uData,fileToRead.Sheets["Sheet1"], uData);
    xlsx.writeFile(fileToRead,'./Users');
    res.send('Done')

  })
 
  app.post('/Authentication', function (req, res) {
    authentication = false;
    for (let i = 0; i < uData.length; i++) {
        if(req.body.email == uData[i]["email"]){
            if(req.body.password == uData[i]["password"]){
              res.send("True")
                authentication = true;
                //break;
            }else res.send("False")
        }else res.send("False")
        
    }
    console.log(authentication);
    //res.send(authentication)
  })
  app.listen(3000)

  
   
 