import clientPromise from "@/lib/mongodb";

export const getActions = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Projekat_Fazon");
    const allActions = await db.collection("akcije").find({}).toArray();
    return { allActions };
  } catch (error) {
    console.log((error as Error).message);
  }
};
export const addNewAction = async (action: object) => {
  try {
    const client = await clientPromise;
    const db = client.db("Projekat_Fazon");
    const newAction = await db.collection("akcije").insertOne(action);
  } catch (error) {
    console.log((error as Error).message);
  }
};
export const updateAction = async (id: any, isPublicInput: boolean) => {
  try {
    const client = await clientPromise;
    const db = client.db("Projekat_Fazon");
    await db.collection("akcije").updateOne(
      { _id: id },
      {
        $set: {
          isPublic: isPublicInput,
        },
      }
    );
  } catch (error) {
    console.log((error as Error).message);
  }
};
export const getSingleAction = async (id: any) => {
  try {
    const { allActions } = await getActions();
    const singleAction: any = allActions?.find(
      (singleAction) => singleAction._id.toString() === id
    );
    return { singleAction };
  } catch (error) {
    console.log((error as Error).message);
  }
};
