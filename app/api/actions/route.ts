import { getActions } from "@/utils/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allActions  = await getActions();
    return NextResponse.json(allActions);
  } catch (error:any) {
    return new Response(error.message);
  }
}

