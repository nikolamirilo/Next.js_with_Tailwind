import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
   const random = Math.random();
   return NextResponse.json(random, {headers:{"Cache-Control": "no-cache, no-store, max-age=0, must-revalidate", "Age": "0"}} )
  } catch (error:any) {
    return new Response(error.message);
  }
}
