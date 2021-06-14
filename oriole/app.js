const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// route
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send("oriole bible") // basic http response code : 200
})


// 404 page
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('not ok :(')
})

// 500 page
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server error')
})

app.listen(port, () => console.log(
    `Oriole web server start on http://localhost:${port}` +
    `press Ctrl-C to terminate.`
))