import { getSingleAction, updateAction } from "@/utils/actions";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { id, isPublic } = await request.json();
    await updateAction(id, isPublic);
    const { singleAction } = await getSingleAction(id);
    return NextResponse.json(singleAction);
  } catch (error) {
    return new Response(error.message);
  }
}
