export interface Action {
    fullName:string;
    email:string;
    title:string;
    category: string;
    description:string;
    image:string;
    isPublic: false,
}


export type Actions = Action[];

