function showChits(name:string,...payments: any[]):void{
  console.log(name);
  payments.forEach((payment:number)=>{
      console.log(payment)
    })

}

showChits('user1')
showChits('user2',5000,10000)
showChits('user3',5000,10000,200000,600000)
showChits('user4',5000,10000,15000)