// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmployeesSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
  },
  employeeNumber: {
    type:{Number, max: 6, min: 6 },
    required: "Employee Number is Required"
  },
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  phoneNumber: {
    type:{Number, max: 9, min: 9 }

  },
  password: {
  	type: String,
  	trim: true,
  	required: "Password is Required"
  }

});

// Create the Model
var Employees = mongoose.model('Employees', EmployeesSchema);

// Export it for use elsewhere
module.exports = Employees;