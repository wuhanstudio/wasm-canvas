// Express
const express = require('express')
const app = express()

// Serve static file
app.use(express.static('docs'))

app.listen(2222, () => {
    console.log('Server running on port 2222!')
})
