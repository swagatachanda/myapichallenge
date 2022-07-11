const mongoose = require('mongoose')
const user = mongoose.Schema({
    data: {
        type: [String],
        required: true,
    },
})
module.exports = mongoose.model('User', user)