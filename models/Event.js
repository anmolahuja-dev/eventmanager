const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    date :{
        type: Date,
        default: Date.now,
    }
});

module.exports = Event = mongoose.model('event',EventSchema);