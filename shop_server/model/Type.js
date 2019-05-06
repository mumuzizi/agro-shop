const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema= new Schema({
    id: Schema.Types.ObjectId,
    typeID: Number,
    typeName: String
});

mongoose.model('Type',typeSchema);