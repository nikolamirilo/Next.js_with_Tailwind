import { deleteAllActions, getActions } from "@/utils/actions";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const allActions = await getActions();
    return NextResponse.json(allActions);
  } catch (error: any) {
    console.log(error);
    return new Response(error.message);
  }
}
export async function DELETE() {
  try {
    await deleteAllActions()
    return NextResponse.json("Successfully deleted database");
  } catch (error: any) {
    console.log(error);
    return new Response(error.message);
  }
}
