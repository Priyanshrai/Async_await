console.log('Person 1: Shows Ticket')

console.log('Person 2: Shows Ticket')

const preMovie=async()=>{

  const person3promiseToShowTicketWhenWifeArrives = new Promise((resolve,reject)=>{

    setTimeout(()=>resolve('ticket'),3000);

  });

  const getPopcorn=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve('Popcorn'),3000);

  });

  const addButter=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve('Butter'),3000);

  });

  const getColddrinks=new Promise((resolve,reject)=>{

    setTimeout(()=>resolve('colddrinks'),3000);

  });

let ticket=await person3promiseToShowTicketWhenWifeArrives;

console.log(`got the ${ticket}`);

console.log(`Husband:We SHould Go in Now`);

console.log(`Wife:i am Hungry`);

let Popcorn=await getPopcorn;

console.log(`Here is ${Popcorn}`);

console.log(`Husband:SHould we Go in Now`);

console.log(`Wife:i dont like popcorn without Butter`);

let Butter=await addButter;

console.log(`added ${Butter}`);

console.log(`Husband:i need coldrink`);

let colddrink=await getColddrinks;

console.log(`so here is ${colddrink}`);

console.log(`Husband:Go in Now`);

console.log(`Wife:lets go now`);

return ticket;

};

preMovie().then((t)=>console.log(`Person 3: shows ${t}`));

console.log('Person 4: Shows Ticket')

console.log('Person 5: Shows Ticket')