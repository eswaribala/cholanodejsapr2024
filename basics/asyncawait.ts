// @ts-ignore
let fetchUsers=async():Promise<any|string>=>{
    let api="https://jsonplaceholder.typicode.com/users"

     let response:any|string=null;
    try {
       let data = await fetch(api)
        response=await data.json()
        return response;
    }catch(error){
       response=error;
       return response;
    }

}

//invoke async function
// @ts-ignore
async function executeAsync():Promise<void> {
    try {
        let response = await fetchUsers();
        console.log(response);
    } catch (err) {
        console.log("Error is " + err);
    }
}
console.log("Before calling a function");
executeAsync();
console.log("After calling a function");