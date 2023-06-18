import { getPublicActions } from "@/utils/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const publicActions  = await getPublicActions();
    return NextResponse.json(publicActions);
  } catch (error:any) {
    return new Response(error.message);
  }
}
