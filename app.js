const path = require('path')
const express = require('express')

const app = express()
const port = 3000

app.listen(port, () => console.log('listen on port 3000'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/projects', (req, res) => {
  res.render('pages/projects')
})

app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.get('/gallery', (req, res) => {
  res.render('pages/gallery')
})

app.get('/recommended', (req, res) => {
  res.render('pages/recommended')
})
