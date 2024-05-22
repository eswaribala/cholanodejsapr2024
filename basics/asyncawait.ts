// @ts-ignore
let fetchUsers=async():Promise<any|string>=>{
    let api="https://jsonplaceholder.typicode.com/users"

     let response:any|string=null;
    try {
       response = await fetch(api)
    }catch(error){
       response=error;
    }
return response
}

console.log(fetchUsers());