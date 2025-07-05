import { NextRequest, NextResponse } from "next/server";

// GET: Public categories with products
export async function GET(req:NextRequest,
  { params }: { params: { id: string } }) {
  try {
const {id}=await params;
console.log("Id",id)
return NextResponse.json("Hello world")
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    throw new Error(`Params type fail with ${message}`)
  }
}