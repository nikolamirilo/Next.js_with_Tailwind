import clientPromise from "@/lib/mongodb";
import { Action } from "@/types/interfaces";
import { ObjectId } from "mongodb";

export const clientConnection  =  async () =>{
  const client = await clientPromise;
  const db = client.db("Projekat_Fazon");
  return db
}
export const getActions = async () => {
  try {
    const db = await clientConnection()
    const allActions:any = await db.collection("akcije").find({}).toArray();
    return allActions;
  } catch (error) {
    console.log((error as Error).message);
  }
};
export const getPublicActions = async () => {
  try {
    const allActions  = await getActions();
    const publicActions = await allActions.filter((item:any)=> item.isPublic === "true")
    return publicActions;
  } catch (error) {
    console.log((error as Error).message);
  }
};


export const addNewAction = async (action: object) => {
  try {
    const db = await clientConnection()
    const newAction = await db.collection("akcije").insertOne(action);
  } catch (error) {
    console.log((error as Error).message);
  }
};
export const updateAction = async (_id: string, isPublic: string) => {
  try {
    const db = await clientConnection()
    const update = await db.collection("akcije").updateOne(
      { _id: new ObjectId(_id) },
      {
        $set: {
          isPublic: isPublic,
        },
      }
    );
    return true
  } catch (error) {
    console.log((error as Error).message);
    return false
  }
};
export const getSingleAction = async (id: any) => {
  try {
    const allActions  = await getActions();
    const singleAction: any = allActions?.find(
      (singleAction:any) => singleAction._id.toString() === id
    );
    return singleAction ;
  } catch (error) {
    console.log((error as Error).message);
  }
};
