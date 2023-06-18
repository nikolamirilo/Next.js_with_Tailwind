import { getSingleAction, updateAction } from "@/utils/actions";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  try {
    const { _id, isPublic } = await request.json();
    const update = await updateAction(_id, isPublic);
    const singleAction  = await getSingleAction(_id);
    if(update){
      return NextResponse.json({message: "Successfully Updated Action", singleAction: singleAction,query:{ _id:_id, isPublic: isPublic}})
    }else{
      return NextResponse.json({message: "There is error inside function", singleAction: singleAction, query:{ _id:_id, isPublic: isPublic}})
    }
  } catch (error) {
    return new Response((error as Error).message);
  }
}
