const express = require('express')

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

const app = express()
const PORT = process.env.PORT || 4444
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`started on http://localhost:${PORT}`))
  })
  .catch(console.error)
