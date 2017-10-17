// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NotesSchema = new Schema({
  message: {
    type: String,
    trim: true
  },
});

// Create the Model
var Notes = mongoose.model('Notes', NotesSchema);

// Export it for use elsewhere
module.exports = Notes;