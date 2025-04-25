import mongoose from "mongoose";
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    phoneNumber:{
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true,
        message: 'Phone Number must be 10 digits and unique'
    },
    job:{
        type: String,
        required: true,
        enum: ['Developer','Tester','DevOps Engineer','QA'],
        message: 'Submitted invalid Job'
    }
});
export default mongoose.model('Person',personSchema);