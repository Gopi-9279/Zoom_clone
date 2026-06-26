import { User } from "../models/user.model.js";
import httpStatus from "http-status";
import bcrypt ,{hash} from 'bcrypt'


const login = async (req,res) =>{
    const {username,passwrod} = req.body;
    if(!username || !passwrod){
        return res.status(400).json({message : "please provide"})
    }
    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(httpStatus.NOT_FOUND).json({message : "user not found"})
        }
        if(bcrypt.compare(passwrod,user.passwrod)){
            let token = crypto = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({token : token})
        }
    } catch (e) {
        return res.status(500).json({message : `Something went wrong ${e}`})        
    }
}



const register = async (req,res) =>{
    const {name,username,passwrod} = req.body;

    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(httpStatus.FOUND).json({message : "User already exits"});

        }

        const hashedPassword = await bcrypt.hash(passwrod,10);
        const newUser = new User({
            name:name,
            username:username,
            passwrod : hashedPassword
        }) 
        await newUser.save();
        res.status(httpStatus.CREATED).json({message : "User Registered"})

    }catch(e){
        res.json({message :`Something went wrong ${e}`})
    }
} 


export {login , register}