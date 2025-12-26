import Contact from "../FoodModel/contactDb.js";

const saveContact = async(req,res)=>{
    try{
        let contact = new Contact(req.body)
        await contact.save();

        res.status(201).json({
            success : true,
            message : "data stored successfully"
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : "data not stored successfully"
        })
    }
}

export default saveContact;