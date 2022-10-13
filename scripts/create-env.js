const fs = require('fs')

fs.writeFilySync('./.env', `API=${process.env.API}`)
