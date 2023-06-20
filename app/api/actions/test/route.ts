import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
   const random = Math.random();
   return NextResponse.json(random, {headers:{"Cache-Control": "no-cache, no-store, max-age=0, must-revalidate"}} )
  } catch (error:any) {
    return new Response(error.message);
  }
}

