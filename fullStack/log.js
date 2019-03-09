const conf = require('./config')
const fs = require("fs")
const filePath = conf.log_file + conf.log_name


function log (data) {
  fs.appendFile(filePath, data + '\r\n', () => {})
}
// fs.writeFileSync(filePath, 'wbs')
module.exports = log 