const express = require('express')
const cluster = require('cluster')
const os = require('os')
const app = express()

const numCpu = 2//os.cpus().length

app.get('/', (req, res) => {
    res.send(`Response from ${process.pid}`)
    //Only to simulate breakdown after request
    // cluster.worker.kill()
})

if(cluster.isMaster) {
    for(let i = 0; i < numCpu; i++) {
        cluster.fork()
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${process.pid} down`)
            cluster.fork()
        })
    }
} else {
    app.listen(3000, () => 
    console.log(`server ${process.pid} at http://localhost:3000`))
}

// app.listen(300, () => console.log(`server at http://localhost:3000`))