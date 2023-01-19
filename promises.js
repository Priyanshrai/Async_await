console.log('Person 1:Shows Ticket <br>');

console.log('Person 2:Shows Ticket<br>');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve('ticket');

    }, 3000);

})

const getPopcorn = promiseWifeBringingTicks.then((t) => {

    console.log('Wife:i have the tickets <br>');

    console.log('Husband:we should go in <br>');

    console.log('wife:No i am Hingry <br>')

    return new Promise((resolve, reject) => resolve(`${t} Popcorn`));



});

const getButter = getPopcorn.then((t) => {

    console.log('Husband:i got some popcorn <br>')

    console.log('Husband:We should go in <br>')

    console.log('Wife:i need Butter On my Popcorn <br>')

    return new Promise((resolve, reject) => resolve(`${t} Butter`));

});
const getColddrinks=getButter.then((t)=>{

    console.log('Husband:i got some colddrink<br>')
  
    console.log('Husband:We should go in <br>')
  
    
  
    return new Promise((resolve,reject)=>resolve(`${t} Colddrink`));
  
  });
  
getColddrinks.then((t)=>console.log(t));



console.log('Person 4:Shows Ticket <br>');

console.log('Person 5:Shows Ticket<br>');