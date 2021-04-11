const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: false,
    },
    isOwner: {
        type: Boolean,
        default: true,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },

});

userSchema.pre("save", function (next) {
    this.email = this.email.toLowerCase();
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;