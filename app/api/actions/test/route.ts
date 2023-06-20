import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
   const random = Math.random();
   return NextResponse.json(random)
  } catch (error:any) {
    return new Response(error.message);
  }
}

