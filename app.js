const path = require('path')
const express = require('express')

const app = express()
const port = 4000

app.listen(port, () => console.log('listen on port 4000'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect('https://' + req.headers.host + req.url);
    else
      return next();
} else
  return next();
});
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
