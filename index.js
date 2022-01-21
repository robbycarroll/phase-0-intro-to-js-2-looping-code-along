const name = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

function writeCards(name, event) {
    let newArray = [];
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }

}







