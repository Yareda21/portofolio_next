import mongoose, { Schema } from "mongoose"

const contactSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name should be longer than 2 letters"],
        maxLength: [50, "Name should not exceed 50 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [
        /^ [a - zA - Z0 -9._ % +-] + @[a - zA - Z0 - 9. -] +\.[a - zA - Z]{ 2, }$/i,
        "Invalid email address!",
        ],
    },
    message: {
        type: String,
        required: [true, "Message is required"],
    },
    phone: {
        type: Number,
        validate: {
        validator: function (v) {
            return v.toString().length === 9;
        },
        message: "Phone number must be 9 digits",
        },
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema) 

export default Contact;
