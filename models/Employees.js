// Include the Mongoose Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');


const EmployeesSchema = new Schema({
  firstName: {
    type: String,
    trim: true
    // required: "First Name is Required"
  },
  lastName: {
    type: String,
    trim: true
    // required: "Last Name is Required"
  },
  employeeNumber: {
    type:{Number}, // max: 6, min: 6
    // required: "Employee Number is Required"
  },
  title: {
    type: String,
    trim: true
    // required: "Title is Required"
  },
  phoneNumber: {
    type:{Number } // max: 9, min: 9

  },
  password: {
  	type: String,
  	trim: true
  	// required: "Password is Required"
  }

});


EmployeesSchema.methods.generalHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

EmployeesSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
};
// Create the Model
const Employees = mongoose.model('Employees', EmployeesSchema);

// Export it for use elsewhere
module.exports = Employees;