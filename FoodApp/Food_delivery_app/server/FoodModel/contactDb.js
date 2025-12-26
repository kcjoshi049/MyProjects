import mongoose  from "mongoose";

let contactSchema = new mongoose.Schema({
    name : {type:String , required : true},
    contact : {type : String, required: true},
    email : {type : String, required : true},
    message : {type : String, required: true},
    createdAt: { type: Date, default: Date.now }
})

let Contact = mongoose.model("Contact", contactSchema);

export default Contact;