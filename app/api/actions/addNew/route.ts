import { addNewAction } from "@/utils/actions";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const newAction = await request.json();
    await addNewAction(newAction);
    return NextResponse.json("Action Added Successully");
  } catch (error) {
    return new Response((error as Error).message);
  }
}
