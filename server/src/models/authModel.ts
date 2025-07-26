import mongoose from 'mongoose';
import validator from 'validator';
const Schema: typeof mongoose.Schema = mongoose.Schema;

const AuthSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordChangedAt: Date,
});

export default mongoose.model('Auth', AuthSchema);
