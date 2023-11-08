import mongoose, { Schema } from "mongoose"

const contactSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [2, "Name should be longer than 2 letters"],
    maxLength: [50, "Name should not exceed 50 characters"],
  },
  phone: {
    type: String,
    required: [true, "phone is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address!"],
  },

  message: {
    type: String,
    required: [true, "Message is required"],
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema) 
export default Contact;
