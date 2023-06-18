// import useSWR from "swr";

// export async function getData(actionType:string) {
//   try{
//     const fetcher = (url: any) => fetch(url).then((res) => res.json());
//     const {
//         data,
//         error,
//         isLoading,
//     } = useSWR(`${process.env.WEB_APP_URL}/api/${actionType}`, fetcher, { revalidateOnMount: true });
//     return data
//   }catch(error){
//     console.log(error as Error)
//   }
 

// }
