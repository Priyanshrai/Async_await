console.log('Person 1: Shows Ticket')
console.log('Person 1: Shows Ticket')
const preMovie=async()=> {
    const person3promiseToShowTicketWhenWifeArrives=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    });

    const getPopcorn=new Promise((resolve,reject)=>{resolve(`Popcorn`)});
    const getButter=new Promise((resolve,reject)=>{resolve(`Butter`)});
    const getColddrinks=new Promise((resolve,reject)=>{resolve(`Colddrinks`)});

    let ticket=await person3promiseToShowTicketWhenWifeArrives;

    let [Popcorn,Butter,Colddrinks]=await Promise.all([getPopcorn,getButter,getColddrinks])

    console.log(`${Popcorn},${Butter},${Colddrinks}`);
    
    return ticket;
};
preMovie().then((t)=>console.log(`Person 3:shows ${t}`));
console.log('Person 4:Shows Ticket');
console.log('Person 5:Shows Ticket');