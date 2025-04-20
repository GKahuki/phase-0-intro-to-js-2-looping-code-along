// function writeCards(names, event) {
//     for (let i = 0; i < names.length; i++) {
//         const messages = [];
//         console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
//         debugger;
//     }
//     return messages;
// }
// writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");

function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
    const names = ["Guadalupe", "Ollie", "Aki"];
  console.log(writeCards(names));


function countDown(num) {
    while (num >= 0) {
        console.log(num--);
         }
    return num;
}
countDown(10);













