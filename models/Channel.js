var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ChannelSchema = new Schema({
  channame: { type: String, required: true, unique: true },
});

// UserSchema.methods.comparePassword = function (enteredPassword, callback) {
//   if (enteredPassword == this.password)
//     callback(null, true);
//   else
//     callback(null, false);
// }

module.exports = mongoose.model('Channel', ChannelSchema);