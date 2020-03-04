const express = require('express')
const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

const Pool = require('pg').Pool
const db = new Pool({
  user: 'postgres',
  password: '1234',
  host: '172.17.0.2',
  port: 5432,
  database: 'postgres'
})

const nunjucks = require('nunjucks')
nunjucks.configure("./", {
  express: server,
  noCache: true,
})

server.post('/', function(req, res) {
  const name = req.body.name
  const email = req.body.email
  const blood = req.body.blood

  if(name == "" || email == "" || blood == ""){
    return res.send("todos os campos são obrigatórios")
  }

  const query = `
    INSERT INTO DONORS("name", "email", "blood") 
    VALUES($1, $2, $3)`

  const values = [name, email, blood]

  db.query(query, values, function(err) {
    if(err) return res.send('erro no banco de dados')

    return res.redirect('/')
  })
})

server.get('/', function(req, res) {
  db.query('SELECT * FROM DONORS', function(err, result) {
    if(err) return res.send('erro no banco de dados')
    const donors = result.rows
    return res.render('index.html', { donors })
  })
})

server.listen(3333, function() {
  console.log('Server on')
})

