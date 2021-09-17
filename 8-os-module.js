const os = require('os')

// current user
const user = os.userInfo()
//console.log(user)

// uptime in seconds
const uptime = os.uptime()
//console.log(`System uptime: ${Math.floor(uptime / 3660)}`)

const currentOS = {
    uptime: os.uptime(),
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

//console.log(currentOS)
