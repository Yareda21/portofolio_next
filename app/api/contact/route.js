import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullName, phone, email, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullName, phone, email, message });
    return NextResponse.json({
      msg: ["Message Sent Successfully"],
      success: true,
    });
    
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList)
      return NextResponse.json({ msg: errorList });
    }
    else {
      return NextResponse.json(error);
    }
  }
}
