import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import  bcryptjs  from 'bcryptjs';
import jwt from "jsonwebtoken"
connect();


export async function POST(req:NextRequest) {
    try {
        const reqBody=await req.json()
        const {username,password}= reqBody;
        let user= await User.findOne({username})
        if(!user){
            return NextResponse.json({error:"User not found!"},{status:400})
        }
        else{
            const validPassword= await bcryptjs.compare(password,user.password)
            if(!validPassword){
                return NextResponse.json({error:"Password is incorrect!"},{status:400})
            }
            else{
                const tokenData={
                    id:user._id,
                    username:user.username,
                    email:user.email
                }
            const token=await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!,{expiresIn:"1h"})
            const response= NextResponse.json({message:"Login successful!"})
            response.cookies.set("token",token,{httpOnly:true})
            return response
            }
        }
        
    } catch (error) {
        
    }
   

    
}