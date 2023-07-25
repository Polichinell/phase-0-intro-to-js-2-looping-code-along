const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

const writeCards = function(array, birthday){
    let arr = []
    for (let i=0; i < array.length; i++){
        arr.push(array[i])
        console.log("Thank you, " + arr[i] + ", for the wonderful " + birthday + " gift!")
    }
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))


let countDown = function(number){
while (number >= 0) {
  console.log(number--);
}
}

countDown(10)