import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import { validate } from "node-cron";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength: [3, "Name must contain at least 3 characters."],
        maxLength: [30, "Name cannot exceed 30 characters."]
    },
    email:{
        type: String,
        require: true,
        validate: [validator.isEmail, "Please provide valid email."]
    },
    phone:{
        type: Number,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    niches:{
        firstNiche: String,
        secondNiche: String,
        thirdNiche: String
    },
    password:{
        type: String,
        require: true,
        minLength: [8, "Password must contain at least 8 characters."],
        maxLength: [32, "Password cannot exceed 32 characters"]
    },
    resume:{
        public_id: String,
        url: String
    },
    coverLetter:{
        type:String
    },
    role:{
        type: String,
        require: true,
        enum: ["Job Seeker","Employer"],
    },
    createdAt:{
        type: Date,
        defaault: Date.now,
    }
});

export const User = mongoose.model("User", userSchema)